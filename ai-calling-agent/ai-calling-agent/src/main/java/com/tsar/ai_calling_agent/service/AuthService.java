package com.tsar.ai_calling_agent.service;

import com.tsar.ai_calling_agent.dto.*;
import com.tsar.ai_calling_agent.model.User;
import com.tsar.ai_calling_agent.repository.UserRepository;
import com.tsar.ai_calling_agent.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JwtUtil jwtUtil;

    // ✅ REGISTER
    public String register(User user) {

        // Check if user already exists
        if (userRepo.findByEmployeeId(user.getEmployeeId()).isPresent()) {
            return "User already exists";
        }

        // No bcrypt → store plain password
        user.setRole("USER");

        userRepo.save(user);

        return "User registered successfully";
    }

    // ✅ LOGIN
    public AuthResponse login(LoginRequest request) {

        User user = userRepo.findByEmployeeId(request.getEmployeeId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!request.getPassword().trim().equals(user.getPassword().trim())) {
            throw new RuntimeException("Invalid password");
        }

        return new AuthResponse(
                "dummy-token", // ✅ simple token for frontend
                user.getRole(),
                user.getEmployeeId()
        );
    }

}