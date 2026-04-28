package com.tsar.ai_calling_agent.controller;

import com.tsar.ai_calling_agent.model.CallLog;
import com.tsar.ai_calling_agent.repository.CallLogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    @Autowired
    private CallLogRepository callLogRepository; // ✅ FIXED

    // ✅ Dashboard API
    @GetMapping("/data")
    public Map<String, Object> getDashboardData(@RequestParam String employeeId) {

        Map<String, Object> response = new HashMap<>();

        response.put("employeeId", employeeId);
        response.put("welcomeMessage", "Welcome " + employeeId + " 👋");

        response.put("totalCalls", 1240);
        response.put("activeCalls", 32);
        response.put("successRate", "78%");
        response.put("failedCalls", "18%");

        response.put("weeklyCalls", new int[]{20, 40, 60, 30, 80});

        response.put("recentCalls", new Object[]{
                Map.of("phone", "9876543210", "status", "Success", "duration", "2 min", "date", "Today"),
                Map.of("phone", "9123456780", "status", "Failed", "duration", "1 min", "date", "Today")
        });

        return response;
    }

    // ✅ STATUS FILTER API (FIXED)
    @GetMapping("/status")
    public List<CallLog> getByStatus(@RequestParam String status) {
        return callLogRepository.findByStatus(status);
    }
}