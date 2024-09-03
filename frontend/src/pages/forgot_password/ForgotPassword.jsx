import React, { useState } from "react";
import "./ForgotPassword.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'primereact/divider';

const ForgotPassword = () => {
    const navigate = useNavigate();  // Hook para navegação entre rotas

    // Estados para armazenar os valores dos campos
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Estado para armazenar mensagens de erro
    const [errorMessage, setErrorMessage] = useState('');
    // Estado para armazenar os requisitos de validação da senha
    const [requirements, setRequirements] = useState({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });

    // Função para validar a senha com base nos requisitos
    const validatePassword = (password) => {
        const minLength = /.{6,}/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Atualiza o estado com os resultados da validação
        setRequirements({
            minLength,
            hasUpperCase,
            hasLowerCase,
            hasNumber,
            hasSpecialChar,
        });
    };

    // Função chamada quando a nova senha é alterada
    const handleNewPasswordChange = (e) => {
        const newPassword = e.target.value;
        setNewPassword(newPassword);
        validatePassword(newPassword);  // Valida a nova senha
    };

    // Função chamada quando a confirmação da senha é alterada
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    // Função chamada quando o usuário tenta enviar o formulário
    const handleSubmit = () => {
        // Verifica se as senhas são iguais e atendem aos requisitos
        if (newPassword !== confirmPassword) {
            setErrorMessage('As senhas devem ser iguais');
        } else if (!requirements.minLength || !requirements.hasUpperCase || !requirements.hasLowerCase || !requirements.hasNumber || !requirements.hasSpecialChar) {
            setErrorMessage('A senha deve atender a todos os requisitos');
        } else {
            setErrorMessage('');
            console.log("Senha alterada com sucesso!");
            // Navegue ou execute outras ações conforme necessário
            // navigate('/some-path'); // Navegação para outra página após sucesso
        }
    };

    // Cabeçalho para o componente Password
    const header = <div className="font-bold mb-3">Escolha uma nova senha</div>;
    // Rodapé para o componente Password com a lista de requisitos
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
        <div className="change-password-container">
            <Card className="p-card-change-password" title="Alterar Senha">
                <div>
                    {/* Campo para e-mail */}
                    <label htmlFor="email">E-mail</label>
                    <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" style={{ width: '100%' }} />

                    {/* Campo para código de alteração */}
                    <label htmlFor="code">Código de Autenticação</label>
                    <InputText id="code" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Código" style={{ width: '100%' }} />

                    {/* Campo para nova senha */}
                    <label htmlFor="newPassword">Nova Senha</label>
                    <Password 
                        value={newPassword} 
                        onChange={handleNewPasswordChange} 
                        header={header} 
                        footer={footer} 
                        placeholder="Nova Senha" 
                        promptLabel="Força da senha" 
                        weakLabel="Senha fraca" 
                        mediumLabel="Senha média" 
                        strongLabel="Senha forte"
                    />

                    {/* Campo para confirmação de senha */}
                    <label htmlFor="confirmPassword">Confirme sua Senha</label>
                    <Password 
                        value={confirmPassword} 
                        onChange={handleConfirmPasswordChange} 
                        feedback={false} 
                        placeholder="Confirme sua Senha" 
                    />

                    {/* Exibe uma mensagem de erro se as senhas não coincidirem ou não atenderem aos requisitos */}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </div>

                {/* Botões para alterar a senha ou cancelar */}
                <div className="button-container">
                    <Button className="w-5" label="Alterar Senha" onClick={handleSubmit} />
                    <Button className="w-5 ml-2" label="Cancelar" onClick={() => navigate('/')} />
                </div>
            </Card>
        </div>
    );
};

export default ForgotPassword;
