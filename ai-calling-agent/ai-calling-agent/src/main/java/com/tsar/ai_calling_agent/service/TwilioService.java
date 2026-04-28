package com.tsar.ai_calling_agent.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.type.PhoneNumber;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.net.URI;

@Service
public class TwilioService {

    @Value("${twilio.sid}")
    private String ACCOUNT_SID;

    @Value("${twilio.token}")
    private String AUTH_TOKEN;

    @Value("${twilio.number}")
    private String FROM_NUMBER;

    // 🔥 Twilio Hosted TwiML URL (NO NGROK NEEDED)
    private static final String TWIML_URL =
            "https://handler.twilio.com/twiml/EHcfb6ce52c874636221eb26579b143805";

    @PostConstruct
    public void init() {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    private String formatNumber(String phone) {
        if (phone == null || phone.isEmpty()) return phone;

        if (phone.startsWith("+")) return phone;

        // assume India if no country code
        return "+91" + phone;
    }

    // ✅ SINGLE CALL
//    public String makeCall(String toPhone) {
//
//        try {
//            Call call = Call.creator(
//                            new PhoneNumber(toPhone),
//                            new PhoneNumber(FROM_NUMBER),
//                            URI.create(TWIML_URL)   // 🔥 USING TWIML BIN
//                    )
//                    .setRecord(true) // record call
//                    .create();
//
//            System.out.println("Calling: " + toPhone);
//            System.out.println("Call SID: " + call.getSid());
//
//            return call.getSid();
//
//        } catch (Exception e) {
//            System.out.println("CALL ERROR:");
//            e.printStackTrace();
//            return null;
//        }
//    }
    // ✅ SINGLE CALL
    public String makeCall(String toPhone) {

        try {
            String formattedPhone = formatNumber(toPhone); // 🔥 FIX

            Call call = Call.creator(
                            new PhoneNumber(formattedPhone), // ✅ use formatted
                            new PhoneNumber(FROM_NUMBER),
                            URI.create(TWIML_URL)
                    )
                    .setRecord(true)
                    .create();

            System.out.println("Calling: " + formattedPhone);
            System.out.println("Call SID: " + call.getSid());

            return call.getSid();

        } catch (Exception e) {
            System.out.println("CALL ERROR:");
            e.printStackTrace();
            return null;
        }
    }

//    // 🔥 BULK / AI CALL (script currently not used here)
//    public String makeCall(String phone, String script) {
//
//        try {
//            System.out.println("Calling: " + phone);
//            System.out.println("Script: " + script);
//
//            Call call = Call.creator(
//                            new PhoneNumber(phone),
//                            new PhoneNumber(FROM_NUMBER),
//                            URI.create(TWIML_URL)   // 🔥 SAME TWIML BIN
//                    )
//                    .setRecord(true)
//                    .create();
//
//            return call.getSid();
//
//        } catch (Exception e) {
//            System.out.println("CALL ERROR:");
//            e.printStackTrace();
//            return null;
//        }
//    }

    // 🔥 BULK CALL
    public String makeCall(String phone, String script) {

        try {
            String formattedPhone = formatNumber(phone); // 🔥 FIX

            System.out.println("Calling: " + formattedPhone);
            System.out.println("Script: " + script);

            Call call = Call.creator(
                            new PhoneNumber(formattedPhone), // ✅ use formatted
                            new PhoneNumber(FROM_NUMBER),
                            URI.create(TWIML_URL)
                    )
                    .setRecord(true)
                    .create();

            return call.getSid();

        } catch (Exception e) {
            System.out.println("CALL ERROR:");
            e.printStackTrace();
            return null;
        }
    }
}