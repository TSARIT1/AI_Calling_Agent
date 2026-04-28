//package com.tsar.ai_calling_agent.controller;
//
//import com.tsar.ai_calling_agent.model.CallLog;
//import com.tsar.ai_calling_agent.model.Customer;
//import com.tsar.ai_calling_agent.repository.CustomerRepository;
//import com.tsar.ai_calling_agent.service.CallLogService;
//import com.tsar.ai_calling_agent.service.TwilioService;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/calls")
//@CrossOrigin(origins = "http://localhost:5173")
//public class CallLogController {
//
//    @Autowired
//    private CallLogService service;
//
//    @Autowired
//    private TwilioService twilioService;
//
//    @Autowired
//    private CustomerRepository customerRepo;
//
//    // 🔥 START CALL
//    @PostMapping("/start")
//    public CallLog startCall(@RequestBody Map<String, Object> req) {
//
//        String empId = req.get("employeeId").toString();
//        Long customerId = Long.parseLong(req.get("customerId").toString());
//
//        // ✅ FETCH CUSTOMER
//        Customer customer = customerRepo.findById(customerId)
//                .orElseThrow(() -> new RuntimeException("Customer not found"));
//
//        // 👉 REAL CALL
//        String callSid = twilioService.makeCall(customer.getPhone());
//        System.out.println("Call SID: " + callSid);
//
//        // 👉 SAVE CALL LOG WITH SID
//        return service.startCall(empId, customerId, callSid);
//    }
//
//    // 🔥 END CALL
//    @PostMapping("/end")
//    public CallLog endCall(@RequestBody Map<String, Object> req) {
//
//        Long id = Long.parseLong(req.get("id").toString());
//        int duration = Integer.parseInt(req.get("duration").toString());
//        String status = req.get("status").toString();
//
//        return service.endCall(id, duration, status);
//    }
//
//    @PostMapping("/recording")
//    public String recordingCallback(
//            @RequestParam("RecordingUrl") String recordingUrl,
//            @RequestParam("RecordingSid") String recordingSid,
//            @RequestParam("CallSid") String callSid
//    ) {
//
//        service.saveRecording(callSid, recordingUrl, recordingSid);
//
//        return "OK";
//    }
//
//    @PostMapping("/bulk")
//    public String bulkCall(@RequestBody Map<String, Object> request) {
//
//        List<Integer> customerIds = (List<Integer>) request.get("customerIds");
//        String script = (String) request.get("script");
//
//        callLogService.bulkCall(customerIds, script);
//
//        return "Campaign started";
//    }
//}

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

    //  START SINGLE CALL
    @PostMapping("/start")
    public CallLog startCall(@RequestBody Map<String, Object> req) {

        String empId = req.get("employeeId").toString();
        Long customerId = Long.parseLong(req.get("customerId").toString());

        Customer customer = customerRepo.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        //  CALL
        String callSid = twilioService.makeCall(customer.getPhone());

        //  SAVE LOG
        CallLog log = new CallLog();
        log.setCustomerId(customerId);
        log.setCustomerName(customer.getName());
        log.setPhoneNumber(customer.getPhone());
        log.setCallSid(callSid);
        log.setStatus("CALLING");

        return service.save(log); // ✅ FIX
    }

    //  BULK CALL (FINAL)
    @PostMapping("/bulk")
    public String bulkCall(@RequestBody Map<String, Object> request) {

        try {
            System.out.println("REQUEST: " + request);

            // ✅ SAFE CONVERSION
            List<Long> customerIds = ((List<?>) request.get("customerIds"))
                    .stream()
                    .map(id -> Long.parseLong(id.toString()))
                    .toList();

            String script = (String) request.get("script");

            System.out.println("IDs: " + customerIds);
            System.out.println("Script: " + script);

            service.bulkCall(customerIds, script);

            return "Campaign started 🚀";

        } catch (Exception e) {
            e.printStackTrace(); //  THIS WILL SHOW REAL ERROR
            return "Error: " + e.getMessage();
        }
    }


    @PostMapping("/recording")
    public String recordingCallback(
            @RequestParam("RecordingUrl") String recordingUrl,
            @RequestParam("RecordingSid") String recordingSid,
            @RequestParam("CallSid") String callSid
    ) {

        service.saveRecording(callSid, recordingUrl, recordingSid);

        //  NEW: trigger speech-to-text
        service.processRecording(recordingUrl, callSid);

        return "OK";
    }
}