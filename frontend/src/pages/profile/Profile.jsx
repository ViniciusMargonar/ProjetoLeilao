import React, { useState, useEffect } from 'react';
import style from './Profile.module.css';
import homeIcon from '../../assets/trauctionLogo.png';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext'; 
import { Button } from "primereact/button";

const Profile = () => {
    // Função para carregar os dados do perfil do local storage
    const loadProfileData = () => {
        const data = localStorage.getItem('profileData');
        return data ? JSON.parse(data) : {
            name: 'João da Silva',
            email: 'joao.silva@example.com',
            phone: '(11) 98765-4321',
            birthDate: '01/01/1980',
            gender: 'Masculino',
            cpf: '123.456.789-00',
            idCard: 'RG 12345678',
            cnh: '12345678900',
            address: 'Rua das Flores, 123',
            neighborhood: 'Bairro Jardim das Rosas',
            city: 'São Paulo',
            state: 'SP',
            zip: '01234-567'
        };
    };

    // Estado para controlar a visibilidade do diálogo de edição
    const [visible, setVisible] = useState(false);

    // Estado para armazenar os dados do perfil
    const [profileData, setProfileData] = useState(loadProfileData());

    // Estado para armazenar os dados que estão sendo editados
    const [editData, setEditData] = useState({ ...profileData });

    // Efeito colateral que salva os dados do perfil no local storage sempre que profileData mudar
    useEffect(() => {
        localStorage.setItem('profileData', JSON.stringify(profileData));
    }, [profileData]);

    // Função chamada quando o botão "Editar Perfil" é clicado
    const handleEditClick = () => {
        setEditData({ ...profileData });
        setVisible(true);
    };

    // Função para lidar com mudanças nos campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    // Função chamada ao clicar no botão "Salvar" no diálogo
    const handleSave = () => {
        setProfileData({
            ...editData,
            cpf: profileData.cpf // Não atualizar o CPF
        });
        setVisible(false);
    };

    // Função chamada ao clicar no botão "Cancelar" ou ao fechar o diálogo
    const handleClose = () => {
        setVisible(false);
    };

    return (
        <div className={style.profileContainer}>
            <Card className={style.mainCard}>
                <div className={style.profileHeader}>
                    <img src={homeIcon} alt="Profile" className={style.profileImage} />
                    <div className={style.profileInfo}>
                        <h1>{profileData.name}</h1>
                        <p>Email: {profileData.email}</p>
                        <p>Telefone: {profileData.phone}</p>
                    </div>
                </div>

                <div className={style.profileContent}>
                    <div className={style.profileSection}>
                        <h2>Dados Pessoais</h2>
                        <p>Data de Nascimento: {profileData.birthDate}</p>
                        <p>Gênero: {profileData.gender}</p>                        
                    </div>

                    <div className={style.profileSection}>
                        <h2>Documentos</h2>
                        <p>Documento de Identidade: {profileData.idCard}</p>
                        <p>CNH: {profileData.cnh}</p>
                        <p>CPF: {profileData.cpf}</p>
                    </div>

                    <div className={style.profileSection}>
                        <h2>Endereço</h2>
                        <p>{profileData.address}</p>
                        <p>{profileData.neighborhood}</p>
                        <p>Cidade: {profileData.city}</p>
                        <p>Estado: {profileData.state}</p>
                        <p>CEP: {profileData.zip}</p>
                    </div>

                    <Button label="Editar Perfil" className="p-button-secondary" onClick={handleEditClick} />
                </div>
            </Card>

            <Dialog 
                header="Editar Perfil" 
                visible={visible} 
                onHide={handleClose} 
                className={style.dialogContainer}
                footer={
                    <div className={style.dialogFooter}>
                        <Button label="Cancelar" icon="pi pi-times" onClick={handleClose} className="p-button-text" />
                        <Button label="Salvar" icon="pi pi-check" onClick={handleSave} autoFocus />
                    </div>
                }
            >
                <div className={style.dialogContent}>
                    <div className={style.dialogSection}>
                        <span>Nome:</span>
                        <InputText name="name" value={editData.name} onChange={handleInputChange} className={style.inputField} />
                    </div>
                    <div className={style.dialogSection}>
                        <span>Email:</span>
                        <InputText name="email" value={editData.email} onChange={handleInputChange} className={style.inputField} />
                    </div>
                    <div className={style.dialogSection}>
                        <span>Telefone:</span>
                        <InputText name="phone" value={editData.phone} onChange={handleInputChange} className={style.inputField} />
                    </div>
                    <div className={style.dialogSection}>
                        <span>Data de Nascimento:</span>
                        <InputText name="birthDate" value={editData.birthDate} onChange={handleInputChange} className={style.inputField} />
                    </div>
                    <div className={style.dialogSection}>
                        <span>Gênero:</span>
                        <InputText name="gender" value={editData.gender} onChange={handleInputChange} className={style.inputField} />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default Profile;
