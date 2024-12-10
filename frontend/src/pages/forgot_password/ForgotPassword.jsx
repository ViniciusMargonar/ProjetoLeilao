import React, { useState } from "react";
import "./ForgotPassword.css";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
    const navigate = useNavigate();

    // Estados para armazenar os valores dos campos
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Estado para controle da etapa atual
    const [step, setStep] = useState(1);

    // Estado para mensagens de erro e sucesso
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Estado para os requisitos de validação da senha
    const [requirements, setRequirements] = useState({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });

    // Validação de senha
    const validatePassword = (password) => {
        const minLength = /.{6,}/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setRequirements({
            minLength,
            hasUpperCase,
            hasLowerCase,
            hasNumber,
            hasSpecialChar,
        });
    };

    // Lida com alterações na senha
    const handleNewPasswordChange = (e) => {
        const newPassword = e.target.value;
        setNewPassword(newPassword);
        validatePassword(newPassword);
    };

    // Função de envio centralizada
    const handleSubmit = async () => {
        try {
            setErrorMessage("");
            setSuccessMessage("");

            if (step === 1) {
                // Etapa 1: Enviar o código de recuperação
                // Chama o backend para gerar e enviar o token
                await axios.post("http://localhost:8080/api/password/recover", { email });

                setSuccessMessage("E-mail de recuperação enviado com sucesso!");
                setStep(2); // Avançar para a próxima etapa
            } else if (step === 2) {
                // Etapa 2: Alterar a senha
                if (newPassword !== confirmPassword) {
                    setErrorMessage("As senhas devem ser iguais.");
                    return;
                }

                if (
                    !requirements.minLength ||
                    !requirements.hasUpperCase ||
                    !requirements.hasLowerCase ||
                    !requirements.hasNumber ||
                    !requirements.hasSpecialChar
                ) {
                    setErrorMessage("A senha deve atender a todos os requisitos.");
                    return;
                }

                await axios.post("http://localhost:8080/api/password/change", {
                    email,
                    token: code, // O código gerado no passo anterior
                    newPassword,
                });

                setSuccessMessage("Senha alterada com sucesso!");
                navigate("/login");
            }
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "Ocorreu um erro. Tente novamente."
            );
        }
    };

    return (
        <div className="change-password-container">
            <Card className="p-card-change-password" title="Alterar Senha">
                {step === 1 && (
                    <div>
                        {/* Etapa 1: Campo de e-mail */}
                        <label htmlFor="email">E-mail</label>
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                            style={{ width: "100%" }}
                        />
                        <Button
                            label="Enviar Código"
                            className="mt-3"
                            onClick={handleSubmit}
                        />
                    </div>
                )}

                {step === 2 && (
                    <div>
                        {/* Etapa 2: Código e nova senha */}
                        <label htmlFor="code">Código de Recuperação</label>
                        <InputText
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Digite o código enviado ao seu e-mail"
                            style={{ width: "100%" }}
                        />

                        <label htmlFor="newPassword" className="mt-3">
                            Nova Senha
                        </label>
                        <Password
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            placeholder="Nova Senha"
                            header={<div className="font-bold mb-3">Escolha uma nova senha</div>}
                            footer={
                                <ul className="pl-2 ml-2 mt-0 line-height-3">
                                    <li
                                        style={{
                                            color: requirements.minLength ? "green" : "red",
                                        }}
                                    >
                                        Mínimo de 6 caracteres
                                    </li>
                                    <li
                                        style={{
                                            color: requirements.hasLowerCase ? "green" : "red",
                                        }}
                                    >
                                        Ao menos uma letra minúscula
                                    </li>
                                    <li
                                        style={{
                                            color: requirements.hasUpperCase ? "green" : "red",
                                        }}
                                    >
                                        Ao menos uma letra maiúscula
                                    </li>
                                    <li
                                        style={{
                                            color: requirements.hasNumber ? "green" : "red",
                                        }}
                                    >
                                        Ao menos um número
                                    </li>
                                    <li
                                        style={{
                                            color: requirements.hasSpecialChar ? "green" : "red",
                                        }}
                                    >
                                        Ao menos um caractere especial
                                    </li>
                                </ul>
                            }
                        />

                        <label htmlFor="confirmPassword">Confirme sua Senha</label>
                        <Password
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            feedback={false}
                            placeholder="Confirme sua nova senha"
                        />

                        <Button
                            label="Alterar Senha"
                            className="mt-3"
                            onClick={handleSubmit}
                        />
                    </div>
                )}

                {/* Exibição de mensagens de erro e sucesso */}
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                {successMessage && (
                    <p style={{ color: "green" }}>{successMessage}</p>
                )}

                <div className="button-container">
                    <Button
                        className="w-5 mt-2"
                        label="Cancelar"
                        onClick={() => navigate("/")}
                    />
                </div>
            </Card>
        </div>
    );
};

export default ForgotPassword;
