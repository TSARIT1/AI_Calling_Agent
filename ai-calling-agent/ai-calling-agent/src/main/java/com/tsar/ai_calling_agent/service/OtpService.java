package com.tsar.ai_calling_agent.service;

import com.tsar.ai_calling_agent.model.OtpEntity;
import com.tsar.ai_calling_agent.model.User;
import com.tsar.ai_calling_agent.repository.OtpRepository;
import com.tsar.ai_calling_agent.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OtpService {

    @Autowired
    private OtpRepository otpRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserRepository userRepository;

    // SEND OTP
    public void sendOtp(String email) {

        User admin = userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Admin not found"
                        ));

        if (!admin.getRole()
                .equalsIgnoreCase("ADMIN")) {

            throw new RuntimeException(
                    "Access Denied"
            );
        }

        // GENERATE OTP
        String otp = String.valueOf(
                100000 + new Random()
                        .nextInt(900000)
        );

        OtpEntity otpEntity = otpRepository
                .findByEmail(email)
                .orElse(new OtpEntity());

        otpEntity.setEmail(email);
        otpEntity.setOtp(otp);

        otpEntity.setExpiryTime(
                LocalDateTime.now()
                        .plusMinutes(5)
        );

        otpRepository.save(otpEntity);

        // SEND EMAIL
        emailService.sendOtp(
                email,
                otp
        );
    }

    // VERIFY OTP
    public boolean verifyOtp(
            String email,
            String otp
    ) {

        OtpEntity otpEntity =
                otpRepository.findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "OTP not found"
                                ));

        // EXPIRED
        if (LocalDateTime.now()
                .isAfter(
                        otpEntity.getExpiryTime()
                )) {

            return false;
        }

        return otpEntity.getOtp()
                .equals(otp);
    }
}