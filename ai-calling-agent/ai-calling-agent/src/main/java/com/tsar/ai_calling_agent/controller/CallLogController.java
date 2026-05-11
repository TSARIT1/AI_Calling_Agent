package com.tsar.ai_calling_agent.controller;

import com.tsar.ai_calling_agent.model.CallLog;
import com.tsar.ai_calling_agent.model.Customer;
import com.tsar.ai_calling_agent.repository.CustomerRepository;
import com.tsar.ai_calling_agent.service.CallLogService;
import com.tsar.ai_calling_agent.service.TwilioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/calls")
@CrossOrigin(origins = "http://localhost:5173")
public class CallLogController {

    @Autowired
    private CallLogService service;

    @Autowired
    private TwilioService twilioService;

    @Autowired
    private CustomerRepository customerRepo;

    // ================= START SINGLE CALL =================

    @PostMapping("/start")
    public CallLog startCall(
            @RequestBody Map<String, Object> req
    ) {

        Long customerId = Long.parseLong(
                req.get("customerId").toString()
        );

        Customer customer = customerRepo.findById(customerId)
                .orElseThrow(() ->
                        new RuntimeException("Customer not found"));

        String callSid = twilioService.makeCall(
                customer.getPhone()
        );

        CallLog log = new CallLog();

        log.setCustomerId(customerId);
        log.setCustomerName(customer.getName());
        log.setPhoneNumber(customer.getPhone());
        log.setCallSid(callSid);
        log.setStatus("CALLING");

        return service.save(log);
    }

    // ================= BULK CALL =================

    @PostMapping("/bulk")
    public String bulkCall(
            @RequestBody Map<String, Object> request
    ) {

        try {

            List<Long> customerIds =
                    ((List<?>) request.get("customerIds"))
                            .stream()
                            .map(id ->
                                    Long.parseLong(id.toString()))
                            .toList();

            String script =
                    (String) request.get("script");

            service.bulkCall(customerIds, script);

            return "Campaign started 🚀";

        } catch (Exception e) {

            e.printStackTrace();

            return "ERROR: " + e.getMessage();
        }
    }

    // ================= RECORDING CALLBACK =================

    @PostMapping("/recording")
    public String recordingCallback(

            @RequestParam("RecordingUrl")
            String recordingUrl,

            @RequestParam("RecordingSid")
            String recordingSid,

            @RequestParam("CallSid")
            String callSid
    ) {

        service.saveRecording(
                callSid,
                recordingUrl,
                recordingSid
        );

        service.processRecording(
                recordingUrl,
                callSid
        );

        return "OK";
    }

    // ================= GET CALLS BY STATUS =================

    @GetMapping("/status/{status}")
    public List<CallLog> getCallsByStatus(
            @PathVariable String status
    ) {

        return service.getCallsByStatus(status);
    }
}