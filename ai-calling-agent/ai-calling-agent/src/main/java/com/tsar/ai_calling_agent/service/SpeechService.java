package com.tsar.ai_calling_agent.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;

@Service
public class SpeechService {

    private final String OPENAI_API_KEY = "OPENAI_API_KEY"; // 🔥 add key

    public String convertToText(String audioUrl) {

        try {
            System.out.println("Downloading audio: " + audioUrl);

            // 🔥 STEP 1: Download audio file
            InputStream in = new URL(audioUrl + ".wav").openStream();
            Path tempFile = Files.createTempFile("audio", ".wav");
            Files.copy(in, tempFile, java.nio.file.StandardCopyOption.REPLACE_EXISTING);

            // 🔥 STEP 2: Send to Whisper API
            String response = sendToWhisper(tempFile);

            return response;

        } catch (Exception e) {
            e.printStackTrace();
            return "Transcript failed";
        }
    }

    private String sendToWhisper(Path filePath) {

        try {
            String command = "curl https://api.openai.com/v1/audio/transcriptions " +
                    "-H \"Authorization: Bearer " + OPENAI_API_KEY + "\" " +
                    "-H \"Content-Type: multipart/form-data\" " +
                    "-F file=@" + filePath.toAbsolutePath() + " " +
                    "-F model=whisper-1";

            Process process = Runtime.getRuntime().exec(command);

            java.util.Scanner s = new java.util.Scanner(process.getInputStream()).useDelimiter("\\A");
            String output = s.hasNext() ? s.next() : "";

            System.out.println("Whisper Response: " + output);

            return output;

        } catch (Exception e) {
            e.printStackTrace();
            return "Error calling Whisper API";
        }
    }
}