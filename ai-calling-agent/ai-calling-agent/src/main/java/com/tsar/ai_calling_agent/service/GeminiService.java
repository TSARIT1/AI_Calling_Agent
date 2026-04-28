package com.tsar.ai_calling_agent.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.*;

@Service
public class GeminiService {

    private static final String API_KEY = "AIzaSyBS8WqbHByqW9FyOTFFdzjIdJwTXIAv-Qw";

    public String getAIResponse(String userInput) {

        try {
            String url =
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=" + API_KEY;

            RestTemplate restTemplate = new RestTemplate();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> part = new HashMap<>();
            part.put("text", userInput);

            Map<String, Object> content = new HashMap<>();
            content.put("parts", List.of(part));

            Map<String, Object> body = new HashMap<>();
            body.put("contents", List.of(content));

            HttpEntity<Map<String, Object>> request =
                    new HttpEntity<>(body, headers);

            ResponseEntity<Map> response =
                    restTemplate.postForEntity(url, request, Map.class);

            List<Map<String, Object>> candidates =
                    (List<Map<String, Object>>) response.getBody().get("candidates");

            Map<String, Object> resContent =
                    (Map<String, Object>) candidates.get(0).get("content");

            List<Map<String, Object>> parts =
                    (List<Map<String, Object>>) resContent.get("parts");

            return parts.get(0).get("text").toString();

        } catch (Exception e) {
            e.printStackTrace();
            return "Gemini API error: " + e.getMessage();
        }
    }
}