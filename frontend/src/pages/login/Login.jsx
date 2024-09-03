import React, { useState } from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext'; 
import { Password } from 'primereact/password'; 
import { Button } from 'primereact/button'; 
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";

const Login = () => {
    // Estado para armazenar as informações do usuário
    const [usuario, setUsuario] = useState({ email: "", password: "" });
    
    // Hook para navegação entre rotas
    const navigate = useNavigate();
    
    // Hook para internacionalização
    const { t } = useTranslation();

    // Função para atualizar o estado com os valores dos campos de entrada
    const handleChange = (input) => {
        setUsuario({ ...usuario, [input.target.name]: input.target.value });
    }

    // Função chamada ao clicar no botão de login
    const login = () => {
        // Verifica as credenciais do usuário
        if (usuario.email === "viniciusmargonar2021@gmail.com" && usuario.password === "123456") {
            // Simula um token e armazena no localStorage
            let token = "token do backend";
            localStorage.setItem("token", token);
            localStorage.setItem("email", usuario.email);
            navigate("/"); // Navega para a página principal após o login bem-sucedido
        } else {
            alert("Usuário ou senha inválidos"); // Exibe uma mensagem de erro se as credenciais estiverem incorretas
        }
    }

    return (
        <div className="login-container">
            <Card title="Login">
                {/* Campo para o e-mail do usuário */}
                <InputText 
                    onChange={handleChange} 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    style={{ width: '100%' }} // Ajusta a largura do campo para 100%
                />
                {/* Campo para a senha do usuário */}
                <Password 
                    onChange={handleChange} 
                    name="password" 
                    id="password" 
                    feedback={false} 
                    placeholder="Senha" 
                    style={{ width: '100%' }} // Ajusta a largura do campo para 100%
                />

                {/* Contêiner para os botões, centralizado */}
                <div className="button-container">
                    {/* Botão de login */}
                    <Button 
                        label={t('button.login')}
                        onClick={login}
                    />
                    {/* Botão de registro */}
                    <Button 
                        className="ml-5" 
                        label={t('button.register')}
                        onClick={() => navigate('/register')}
                    />
                </div>

                {/* Link "Esqueci minha senha" centralizado */}
                <div className="forgot-password">
                    <a className="cursor-pointer" onClick={() => navigate('/forgotPassword')}>
                        Esqueci minha senha.
                    </a>
                </div>
            </Card>
        </div>
    );
}

export default Login;
