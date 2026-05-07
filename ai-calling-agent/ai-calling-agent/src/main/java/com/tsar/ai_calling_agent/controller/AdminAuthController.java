package com.tsar.ai_calling_agent.controller;

import com.tsar.ai_calling_agent.service.OtpService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminAuthController {

    @Autowired
    private OtpService otpService;

    // SEND OTP
    @PostMapping("/send-otp")
    public String sendOtp(
            @RequestBody Map<String, String> request
    ) {

        otpService.sendOtp(
                request.get("email")
        );

        return "OTP Sent Successfully";
    }

    // VERIFY OTP
    @PostMapping("/verify-otp")
    public String verifyOtp(
            @RequestBody Map<String, String> request
    ) {

        boolean valid =
                otpService.verifyOtp(
                        request.get("email"),
                        request.get("otp")
                );

        if (!valid) {

            throw new RuntimeException(
                    "Invalid OTP"
            );
        }

        return "Login Success";
    }
}