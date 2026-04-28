package com.tsar.ai_calling_agent.service;

import com.tsar.ai_calling_agent.model.CallLog;
import com.tsar.ai_calling_agent.model.Customer;
import com.tsar.ai_calling_agent.repository.CallLogRepository;
import com.tsar.ai_calling_agent.repository.CustomerRepository;

import com.joestelmach.natty.DateGroup;
import com.joestelmach.natty.Parser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
public class CallLogService {

    @Autowired
    private CallLogRepository callLogRepo;

    @Autowired
    private CustomerRepository customerRepo;

    @Autowired
    private TwilioService twilioService;

    @Autowired
    private SpeechService speechService;

    private static final int MAX_ATTEMPTS = 3;

    //  BULK CALL
    public void bulkCall(List<Long> ids, String script) {

        List<Customer> customers = customerRepo.findAllById(ids);

        for (Customer c : customers) {

            try {
                int attempt = callLogRepo.countByCustomerId(c.getId()) + 1;

                if (attempt > MAX_ATTEMPTS) {
                    System.out.println("Max attempts reached for: " + c.getPhone());
                    continue;
                }

                String callSid = twilioService.makeCall(c.getPhone(), script);

                CallLog log = new CallLog();
                log.setCustomerId(c.getId());
                log.setCustomerName(c.getName());
                log.setPhoneNumber(c.getPhone());

                log.setCallSid(callSid);
                log.setStatus("CALLING");
                log.setStartTime(LocalDateTime.now());
                log.setAttemptNo(attempt);

                callLogRepo.save(log);

            } catch (Exception e) {
                System.out.println("Error calling: " + c.getPhone());
                e.printStackTrace();
            }
        }
    }

    //  SAVE CALL LOG
    public CallLog save(CallLog log) {
        return callLogRepo.save(log);
    }

    // PROCESS RECORDING → TRANSCRIPT + CALLBACK DETECTION
    public void processRecording(String recordingUrl, String callSid) {

        try {
            String transcript = speechService.convertToText(recordingUrl);

            CallLog log = callLogRepo.findByCallSid(callSid)
                    .orElseThrow(() -> new RuntimeException("Call not found"));

            log.setTranscript(transcript);

            //  CALLBACK TIME EXTRACTION
            LocalDateTime callbackTime = extractCallbackTime(transcript);

            if (callbackTime != null) {
                log.setStatus("CALL_BACK");
                log.setCallbackTime(callbackTime);
            } else {
                log.setStatus("COMPLETED");
            }

            callLogRepo.save(log);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // SMART TIME EXTRACTION USING NATTY
    private LocalDateTime extractCallbackTime(String text) {

        try {
            Parser parser = new Parser();
            List<DateGroup> groups = parser.parse(text);

            if (!groups.isEmpty()) {
                Date date = groups.get(0).getDates().get(0);

                LocalDateTime parsedTime = date.toInstant()
                        .atZone(ZoneId.systemDefault())
                        .toLocalDateTime();

                // FIX: if time already passed → move to next day
                if (parsedTime.isBefore(LocalDateTime.now())) {
                    parsedTime = parsedTime.plusDays(1);
                }

                return parsedTime;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    //  SAVE RECORDING
    public void saveRecording(String callSid, String url, String sid) {

        CallLog log = callLogRepo.findByCallSid(callSid)
                .orElseThrow(() -> new RuntimeException("Call not found"));

        log.setRecordingUrl(url);
        log.setRecordingSid(sid);

        callLogRepo.save(log);
    }

    //  AUTO CALLBACK SCHEDULER
    @Scheduled(fixedRate = 60000) // every 1 minute
    public void processCallbacks() {

        List<CallLog> callbacks = callLogRepo.findByStatus("CALL_BACK");

        for (CallLog log : callbacks) {

            try {
                if (log.getCallbackTime() != null &&
                        log.getCallbackTime().isBefore(LocalDateTime.now())) {

                    //  retry limit check
                    if (log.getAttemptNo() >= MAX_ATTEMPTS) {
                        System.out.println("Max retry reached for: " + log.getPhoneNumber());
                        continue;
                    }

                    String callSid = twilioService.makeCall(log.getPhoneNumber(), "Callback");

                    log.setStatus("CALLING");
                    log.setCallSid(callSid);
                    log.setStartTime(LocalDateTime.now());
                    log.setAttemptNo(log.getAttemptNo() + 1);

                    callLogRepo.save(log);
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}