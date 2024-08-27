import React, { useState } from "react";
import "./Register.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import Login from "../login/Login";
import { useNavigate } from 'react-router-dom';

import { Divider } from 'primereact/divider';



const Register = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const header = <div className="font-bold mb-3">Escolha uma senha</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Obrigatório:</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>Mínimo de 06 caracteres</li>
                <li>Ao menos uma letra minúscula</li>
                <li>Ao menos um caractere especial</li>
                <li>Ao menos uma letra maiúscula</li>
                <li>Ao menos um número</li>
            </ul>
        </>
    );

    return (
        <div className="register-container">
            <Card className="p-card-register" title="Cadastre-se">
                <div className="">
                    <label for="nome">Nome</label>
                    <InputText inputStyle={{ width: '100%' }} id="nome" placeholder="Nome" />


                    <label for="sobrenome">Sobrenome</label>
                    <InputText inputStyle={{ width: '100%' }} id="sobrenome" placeholder="Sobrenome" />

                    <label for="email">E-mail</label>
                    <InputText inputStyle={{ width: '100%' }} id="email" placeholder="Email" />

                    <label className="" for="senha">Senha</label>
                    <Password value={value} onChange={(e) => setValue(e.target.value)} header={header} footer={footer} placeholder="Senha"
                        promptLabel="Sugestão" weakLabel="Senha fraca" mediumLabel="Senha média" strongLabel="Senha forte"/>


                    <Password feedback={false} tabIndex={1} placeholder="Confirme sua Senha" />

                </div>
                <Button className="w-4" label="Cadastrar" />
                <Button className="w-4 ml-2" label="Voltar" onClick={() => navigate('/login')} />
            </Card>
        </div>
    );
}
export default Register;
