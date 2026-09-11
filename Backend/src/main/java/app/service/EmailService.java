package app.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    @Value("${brevo.api-key}")
    private String apiKey;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final HttpClient httpClient = HttpClient.newHttpClient();

    public void sendOtpEmail(String toEmail, String toName, String otpCode) {
        try {
            Map<String, Object> payload = new HashMap<>();
            
            // Setup sender
            Map<String, String> sender = new HashMap<>();
            sender.put("name", "CareerMind Security");
            sender.put("email", "b8c9c4001@smtp-brevo.com"); // the login email provided by user
            payload.put("sender", sender);

            // Setup recipient
            Map<String, String> to = new HashMap<>();
            to.put("email", toEmail);
            to.put("name", toName);
            payload.put("to", List.of(to));

            // Setup content
            payload.put("subject", "Your CareerMind Verification Code");
            
            String htmlContent = "<html><body style='font-family: Arial, sans-serif; text-align: center; padding: 20px;'>"
                    + "<h2>Welcome to CareerMind!</h2>"
                    + "<p>Here is your 6-digit verification code to complete your registration:</p>"
                    + "<h1 style='color: #4F46E5; letter-spacing: 5px; font-size: 36px;'>" + otpCode + "</h1>"
                    + "<p>This code will expire in exactly <strong>1 minute</strong>.</p>"
                    + "<p>If you did not request this code, please ignore this email.</p>"
                    + "</body></html>";
                    
            payload.put("htmlContent", htmlContent);

            String requestBody = objectMapper.writeValueAsString(payload);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.brevo.com/v3/smtp/email"))
                    .header("api-key", apiKey)
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() >= 400) {
                System.err.println("Failed to send email via Brevo: " + response.body());
                throw new RuntimeException("Email sending failed");
            }

            System.out.println("OTP Email sent successfully to " + toEmail);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error sending OTP email", e);
        }
    }
}
