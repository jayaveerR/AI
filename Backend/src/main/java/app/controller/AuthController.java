package app.controller;

import app.dto.*;
import app.entity.User;
import app.model.OtpVerification;
import app.repository.OtpRepository;
import app.repository.UserRepository;
import app.security.JwtUtil;
import app.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final OtpRepository otpRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final EmailService emailService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtil.generateToken(authentication);

        User user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(() -> new RuntimeException("User not found"));

        return ResponseEntity.ok(new AuthResponse(jwt, user.getName(), user.getEmail()));
    }

    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestBody SendOtpRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        // Generate 6-digit OTP
        String otpCode = String.format("%06d", new Random().nextInt(999999));
        
        // Save to database
        OtpVerification otpVerification = otpRepository.findByEmail(request.getEmail())
                .orElse(new OtpVerification());
        
        otpVerification.setEmail(request.getEmail());
        otpVerification.setOtpCode(otpCode);
        otpVerification.setExpiresAt(LocalDateTime.now().plusMinutes(1)); // 1 min expiry
        otpVerification.setVerified(false);
        
        otpRepository.save(otpVerification);

        // Send Email
        emailService.sendOtpEmail(request.getEmail(), request.getName(), otpCode);

        return ResponseEntity.ok("OTP sent successfully");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody VerifyOtpRequest request) {
        Optional<OtpVerification> optOtp = otpRepository.findByEmail(request.getEmail());
        
        if (optOtp.isEmpty()) {
            return ResponseEntity.badRequest().body("No OTP request found for this email.");
        }
        
        OtpVerification otp = optOtp.get();
        
        if (otp.isExpired()) {
            return ResponseEntity.badRequest().body("OTP has expired. Please request a new one.");
        }
        
        if (!otp.getOtpCode().equals(request.getOtp())) {
            return ResponseEntity.badRequest().body("Invalid OTP. Please try again.");
        }
        
        // Mark as verified
        otp.setVerified(true);
        otpRepository.save(otp);
        
        return ResponseEntity.ok("OTP verified successfully");
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest signUpRequest) {
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        // Check if email was verified via OTP
        Optional<OtpVerification> optOtp = otpRepository.findByEmail(signUpRequest.getEmail());
        if (optOtp.isEmpty() || !optOtp.get().isVerified()) {
            return ResponseEntity.badRequest().body("Error: Email not verified!");
        }

        User user = new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        userRepository.save(user);

        // Clean up OTP record
        otpRepository.deleteByEmail(signUpRequest.getEmail());

        return ResponseEntity.ok("User registered successfully!");
    }
}
