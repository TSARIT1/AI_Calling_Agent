//package com.tsar.ai_calling_agent.model;
//
//import jakarta.persistence.*;
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "call_logs")
//public class CallLog {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    // 🔥 BASIC INFO
//    private String employeeId;
//    private Long customerId;
//
//    private String customerName;
//    private String phoneNumber;
//
//    // 🔥 CALL DETAILS
//    private String status;          // CALLING / COMPLETED / FAILED
//    private int duration;
//
//    // 🔥 MULTIPLE CALL SUPPORT
//    private int attemptNo;          // 🔥 NEW (important)
//
//    // 🔥 TWILIO DATA
//    private String callSid;
//    private String recordingUrl;
//    private String recordingSid;
//
//    // 🔥 TIMESTAMPS
//    private LocalDateTime startTime;
//    private LocalDateTime endTime;
//
//
//
//    @Column(columnDefinition = "TEXT")
//    private String transcript;
//
//    // ===== GETTERS & SETTERS =====
//
//    public Long getId() { return id; }
//
//    public String getEmployeeId() { return employeeId; }
//    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }
//
//    public Long getCustomerId() { return customerId; }
//    public void setCustomerId(Long customerId) { this.customerId = customerId; }
//
//    public String getCustomerName() { return customerName; }
//    public void setCustomerName(String customerName) { this.customerName = customerName; }
//
//    public String getPhoneNumber() { return phoneNumber; }
//    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
//
//    public String getStatus() { return status; }
//    public void setStatus(String status) { this.status = status; }
//
//    public int getDuration() { return duration; }
//    public void setDuration(int duration) { this.duration = duration; }
//
//    public int getAttemptNo() { return attemptNo; }
//    public void setAttemptNo(int attemptNo) { this.attemptNo = attemptNo; }
//
//    public String getCallSid() { return callSid; }
//    public void setCallSid(String callSid) { this.callSid = callSid; }
//
//    public String getRecordingUrl() { return recordingUrl; }
//    public void setRecordingUrl(String recordingUrl) { this.recordingUrl = recordingUrl; }
//
//    public String getRecordingSid() { return recordingSid; }
//    public void setRecordingSid(String recordingSid) { this.recordingSid = recordingSid; }
//
//    public LocalDateTime getStartTime() { return startTime; }
//    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }
//
//    public LocalDateTime getEndTime() { return endTime; }
//    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }
//}



package com.tsar.ai_calling_agent.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "call_logs")
public class CallLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 🔥 BASIC INFO
    private String employeeId;
    private Long customerId;

    private String customerName;
    private String phoneNumber;

    // 🔥 CALL DETAILS
    private String status;
    private int duration;

    // 🔥 MULTIPLE CALL SUPPORT
    private int attemptNo;

    // 🔥 TWILIO DATA
    private String callSid;
    private String recordingUrl;
    private String recordingSid;

    // 🔥 TIMESTAMPS
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    // 🔥 SPEECH TO TEXT
    @Column(columnDefinition = "TEXT")
    private String transcript;

    private LocalDateTime callbackTime;

    // ===== GETTERS & SETTERS =====

    public Long getId() { return id; }

    public String getEmployeeId() { return employeeId; }
    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }

    public Long getCustomerId() { return customerId; }
    public void setCustomerId(Long customerId) { this.customerId = customerId; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public int getDuration() { return duration; }
    public void setDuration(int duration) { this.duration = duration; }

    public int getAttemptNo() { return attemptNo; }
    public void setAttemptNo(int attemptNo) { this.attemptNo = attemptNo; }

    public String getCallSid() { return callSid; }
    public void setCallSid(String callSid) { this.callSid = callSid; }

    public String getRecordingUrl() { return recordingUrl; }
    public void setRecordingUrl(String recordingUrl) { this.recordingUrl = recordingUrl; }

    public String getRecordingSid() { return recordingSid; }
    public void setRecordingSid(String recordingSid) { this.recordingSid = recordingSid; }

    public LocalDateTime getStartTime() { return startTime; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }

    public LocalDateTime getEndTime() { return endTime; }
    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }

    public String getTranscript() { return transcript; }
    public void setTranscript(String transcript) { this.transcript = transcript; }

    public LocalDateTime getCallbackTime() {
        return callbackTime;
    }

    public void setCallbackTime(LocalDateTime callbackTime) {
        this.callbackTime = callbackTime;
    }
}