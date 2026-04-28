package com.tsar.ai_calling_agent.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class LoginRequest {

    @JsonProperty("employee_id") // 👈 THIS FIXES EVERYTHING
    private String employeeId;

    private String password;
}