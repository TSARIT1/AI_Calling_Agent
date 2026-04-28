package com.tsar.ai_calling_agent.controller;

import com.tsar.ai_calling_agent.dto.*;
import com.tsar.ai_calling_agent.model.User;
import com.tsar.ai_calling_agent.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return authService.register(user);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}