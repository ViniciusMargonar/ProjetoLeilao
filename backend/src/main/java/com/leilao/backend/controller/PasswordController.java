package com.leilao.backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leilao.backend.model.PasswordChangeRequestDTO;
import com.leilao.backend.model.PasswordRecoveryRequestDTO;
import com.leilao.backend.service.EmailService;

@RestController
@RequestMapping("/api/password")
public class PasswordController {

    @Autowired
    private EmailService emailService;

    // Mock de armazenamento de tokens de recuperação
    private Map<String, String> recoveryTokens = new HashMap<>();

    @PostMapping("/recover")
    public ResponseEntity<String> sendRecoveryToken(@RequestBody PasswordRecoveryRequestDTO request) {
        // Gera um token de recuperação único usando UUID
        String token = UUID.randomUUID().toString();
        recoveryTokens.put(request.getEmail(), token);
        
        // Envia o token por e-mail
        emailService.sendRecoveryToken(request.getEmail(), token);
        return ResponseEntity.ok("Token enviado para " + request.getEmail());
    }

    @PostMapping("/change")
    public ResponseEntity<String> changePassword(@RequestBody PasswordChangeRequestDTO request) {
        String storedToken = recoveryTokens.get(request.getEmail());

        if (storedToken == null || !storedToken.equals(request.getToken())) {
            return ResponseEntity.badRequest().body("Token inválido ou expirado.");
        }

        // Lógica para alterar a senha (exemplo usando um UserService)
        // userService.changePassword(request.getEmail(), request.getNewPassword());

        recoveryTokens.remove(request.getEmail()); // Remove o token usado
        return ResponseEntity.ok("Senha alterada com sucesso.");
    }
}
