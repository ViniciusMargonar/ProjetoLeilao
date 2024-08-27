import React, {useState} from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import {useNavigate} from "react-router-dom";
import { useTranslation } from "react-i18next";





const Login = () => {
    
    const [usuario, setUsuario] = useState({email:"", password:""});
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleChange = (input) => {
        setUsuario({...usuario, [input.target.name]:input.target.value});
    }

    const login = () =>{

        if (usuario.email == "viniciusmargonar2021@gmail.com" && usuario.password == "123456"){
            let token = "token do backend"
            localStorage.setItem("token", token);
            localStorage.setItem("email", usuario.email);
            navigate("/");
    }else {
        alert("Usuário ou senha inválidos");}
    }


    return (
        <div className="login-container">
            <Card title="Login">
                <InputText onChange={handleChange} name="email" id="email" placeholder="Email"/>
                <Password onChange={handleChange} name="password" id="password"feedback={false} placeholder="Senha"/>
                <div className="teste">
                    <Button 
                        label={t('button.login')}
                        onClick={login}
                    />
                    <Button 
                        className="ml-5" 
                        label={t('button.register')}
                        onClick={() => navigate('/register')}
                    />
                </div>
                <a className="cursor-pointer">
                    Esqueci minha senha.
                </a>
            </Card>
        </div>
    );
}
export default Login;