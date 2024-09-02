import React, { useState } from "react";
import "./Register.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'primereact/divider';

const Register = () => {
    const navigate = useNavigate();
    
    // Estado para armazenar a senha inserida pelo usuário
    const [password, setPassword] = useState('');
    
    // Novo estado para armazenar a confirmação da senha inserida pelo usuário
    const [confirmPassword, setConfirmPassword] = useState('');

    // Novo estado para armazenar uma mensagem de erro se as senhas não coincidirem
    const [errorMessage, setErrorMessage] = useState('');

    // Estado para rastrear quais requisitos da senha foram cumpridos
    const [requirements, setRequirements] = useState({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });

    // Função que valida a senha e atualiza os dados dos requisitos
    const validarSenha = (password) => {
        const minLength = /.{6,}/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Atualiza os requisitos com base nos resultados das validações
        setRequirements({
            minLength,
            hasUpperCase,
            hasLowerCase,
            hasNumber,
            hasSpecialChar,
        });
    };

    // Função chamada quando a senha é alterada, para atualizar a senha e validar os requisitos
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword); // Atualiza a senha na variável de estado
        validarSenha(newPassword); // Chama a função de validação
    };

    // Nova função chamada quando a confirmação da senha é alterada
    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword); // Atualiza a confirmação da senha na variável de estado
    };

    // Nova função chamada quando o usuário tenta enviar o formulário
    const handleSubmit = () => {
        // Verifica se a senha e a confirmação da senha são iguais
        if (password !== confirmPassword) {
            setErrorMessage('As senhas devem ser iguais'); // Exibe uma mensagem de erro se as senhas não forem iguais
        } else {
            setErrorMessage(''); // Limpa a mensagem de erro se as senhas forem iguais
            
            console.log("Cadastro realizado!");
        }
    };

    const header = <div className="font-bold mb-3">Escolha uma senha</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Obrigatório:</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li style={{ color: requirements.minLength ? 'green' : 'red' }}>Mínimo de 06 caracteres</li>
                <li style={{ color: requirements.hasLowerCase ? 'green' : 'red' }}>Ao menos uma letra minúscula</li>
                <li style={{ color: requirements.hasSpecialChar ? 'green' : 'red' }}>Ao menos um caractere especial</li>
                <li style={{ color: requirements.hasUpperCase ? 'green' : 'red' }}>Ao menos uma letra maiúscula</li>
                <li style={{ color: requirements.hasNumber ? 'green' : 'red' }}>Ao menos um número</li>
            </ul>
        </>
    );

    return (
        <div className="register-container">
            <Card className="p-card-register" title="Cadastre-se">
                <div>
                    <label htmlFor="nome">Nome</label>
                    <InputText id="nome" placeholder="Nome" style={{ width: '100%' }} />

                    <label htmlFor="sobrenome">Sobrenome</label>
                    <InputText id="sobrenome" placeholder="Sobrenome" style={{ width: '100%' }} />

                    <label htmlFor="email">E-mail</label>
                    <InputText id="email" placeholder="Email" style={{ width: '100%' }} />

                    <label htmlFor="senha">Senha</label>
                    <Password 
                        value={password} 
                        onChange={handlePasswordChange} // Atualiza a senha e valida os requisitos em tempo real
                        header={header} 
                        footer={footer} 
                        placeholder="Senha"
                        promptLabel="Força da senha" 
                        weakLabel="Senha fraca" 
                        mediumLabel="Senha média" 
                        strongLabel="Senha forte"
                    />

                    <label htmlFor="confirmarSenha">Confirme sua Senha</label>
                    <Password 
                        value={confirmPassword} 
                        onChange={handleConfirmPasswordChange} // Atualiza a confirmação da senha em tempo real
                        feedback={false} 
                        placeholder="Confirme sua Senha" 
                    />

                    {/* Exibe uma mensagem de erro se as senhas não coincidirem */}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </div>

                {/* O botão "Cadastrar" agora valida se as senhas são iguais antes de prosseguir */}
                <div className="button-container">
                    <Button className="w-4" label="Cadastrar" onClick={handleSubmit} />
                    <Button className="w-4 ml-2" label="Voltar" onClick={() => navigate('/login')} />
                </div>
            </Card>
        </div>
    );
};

export default Register;
