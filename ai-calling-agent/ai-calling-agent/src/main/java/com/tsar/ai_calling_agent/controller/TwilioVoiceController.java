package com.tsar.ai_calling_agent.controller;

import com.tsar.ai_calling_agent.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class TwilioVoiceController {

    @Autowired
    private GeminiService geminiService;

    // 🔥 TWILIO VOICE START
    @PostMapping(value = "/twilio-voice", produces = "application/xml")
    public String voice() {

        return "<Response>" +
                "<Gather input=\"speech\" action=\"/process-speech\" method=\"POST\">" +
                "<Say>Hello, this is TSAR AI system. How can I help you?</Say>" +
                "</Gather>" +
                "</Response>";
    }

    // 🔥 PROCESS SPEECH + AI RESPONSE
    @PostMapping(value = "/process-speech", produces = "application/xml")
    public String processSpeech(@RequestParam("SpeechResult") String speech) {

        System.out.println("User said: " + speech);

        // 🔥 AI RESPONSE
        String reply = geminiService.getAIResponse(speech);

        return "<Response>" +
                "<Gather input=\"speech\" action=\"/process-speech\" method=\"POST\">" +
                "<Say>" + reply + "</Say>" +
                "</Gather>" +
                "</Response>";
    }

    // 🔥 TEST AI API
    @GetMapping("/test-ai")
    public String testAI() {
        return geminiService.getAIResponse("Hello AI");
    }
}