package com.leilao.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;

    /**
     * Envia um email simples com o destinatário, assunto e texto fornecidos.
     *
     * @param to      o endereço de email do destinatário
     * @param subject o assunto do email
     * @param text    o conteúdo do email
     */
    public void sendSimpleEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }

    /**
     * Envia um email usando um template com o destinatário, assunto, variáveis de
     * email e nome do arquivo de template fornecidos.
     *
     * @param to               o endereço de email do destinatário
     * @param subject          o assunto do email
     * @param emailVariables   as variáveis de email a serem usadas no template -
     *                         org.thymeleaf.context.Context
     * @param templateFileName o nome do arquivo html de template
     * @throws MessagingException se ocorrer um erro ao enviar o email
     */
    public void sendTemplateEmail(String to, String name) throws MessagingException {
        // Cria o contexto com a variável 'name' para o template
        Context context = new Context();
        context.setVariable("name", name);
    
        // Processa o template com as variáveis
        String process = templateEngine.process("email/welcome", context);
    
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
    
        helper.setTo(to);
        helper.setSubject("Cadastro Efetuado com Sucesso!");
        helper.setText(process, true); // true indica que o texto será tratado como HTML
    
        mailSender.send(message);
    }
    

    /**
     * Envia um código de recuperação para o email fornecido.
     *
     * @param to   o endereço de email do destinatário
     * @param code o código de recuperação a ser enviado
     */
    public void sendRecoveryToken(String to, String token) {
        String subject = "Token de Recuperação de Senha";
        String text = "Olá,\n\nSeu token de recuperação de senha é: " + token +
                      "\n\nSe você não solicitou a recuperação, ignore este email.\n\nAtenciosamente,\nEquipe Leilão";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        mailSender.send(message);
    }
}
