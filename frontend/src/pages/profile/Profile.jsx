import React from 'react';
import style from './Profile.module.css';
import homeIcon from '../../assets/trauctionLogo.png';
import { Card } from 'primereact/card';

const Profile = () => {
    return (
        <div className={style.profileContainer}>
            <Card className={style.mainCard}>
                <div className={style.profileHeader}>
                    <img src={homeIcon} alt="Profile" className={style.profileImage} />
                    <div className={style.profileInfo}>
                        <h1>João da Silva</h1>
                        <p>Email: joao.silva@example.com</p>
                        <p>Telefone: (11) 98765-4321</p>
                    </div>
                </div>

                <div className={style.profileContent}>
                    <div className={style.profileSection}>
                        <h2>Dados Pessoais</h2>
                        <p>Data de Nascimento: 01/01/1980</p>
                        <p>Gênero: Masculino</p>
                        <p>CPF: 123.456.789-00</p>
                    </div>

                    <div className={style.profileSection}>
                        <h2>Documentos</h2>
                        <p>Documento de Identidade: RG 12345678</p>
                        <p>CNH: 12345678900</p>
                    </div>

                    <div className={style.profileSection}>
                        <h2>Endereço</h2>
                        <p>Rua das Flores, 123</p>
                        <p>Bairro Jardim das Rosas</p>
                        <p>Cidade: São Paulo</p>
                        <p>Estado: SP</p>
                        <p>CEP: 01234-567</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Profile;
