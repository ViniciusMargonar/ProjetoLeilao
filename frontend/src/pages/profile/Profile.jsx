import React, { useState, useEffect } from 'react';
import style from './Profile.module.css';
import homeIcon from '../../assets/trauctionLogo.png';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { FileUpload } from 'primereact/fileupload';

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
            idCard: '39.230.258-5',
            address: 'Rua das Flores, 123',
            neighborhood: 'Bairro Jardim das Rosas',
            city: 'São Paulo',
            state: 'SP',
            zip: '87701060',
            profilePic: homeIcon
        };
    };

    // Estado para gerenciar a visibilidade do diálogo de edição de perfil
    const [visible, setVisible] = useState(false);
    // Estado para armazenar os dados do perfil
    const [profileData, setProfileData] = useState(loadProfileData());
    // Estado para armazenar os dados que estão sendo editados
    const [editData, setEditData] = useState({ ...profileData });
    // Estado para gerenciar a visibilidade do diálogo de upload de foto
    const [uploadVisible, setUploadVisible] = useState(false);

    // Atualiza os dados do perfil no local storage sempre que profileData muda
    useEffect(() => {
        localStorage.setItem('profileData', JSON.stringify(profileData));
    }, [profileData]);

    // Função para lidar com mudanças nos campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });

        // Se o campo alterado for o CEP e ele tiver 8 caracteres, busca o endereço
        if (name === 'zip' && value.length === 8) {
            fetchAddressFromCep(value);
        }
    };

    // Função para buscar o endereço com base no CEP usando a API ViaCep
    const fetchAddressFromCep = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    setEditData(prevData => ({
                        ...prevData,
                        address: data.logradouro || '',
                        neighborhood: data.bairro || '',
                        city: data.localidade || '',
                        state: data.uf || ''
                    }));
                } else {
                    console.error('CEP não encontrado');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
            });
    };

    // Função chamada quando o botão "Editar Perfil" é clicado
    const handleEditClick = () => {
        setEditData({ ...profileData });
        setVisible(true);
    };

    // Função para salvar as alterações e fechar o diálogo de edição
    const handleSave = () => {
        setProfileData({
            ...editData
        });
        setVisible(false);
    };

    // Função para fechar o diálogo de edição sem salvar
    const handleClose = () => {
        setVisible(false);
    };

    // Função para lidar com o upload de uma nova foto de perfil
    const handleUpload = (event) => {
        const file = event.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileData(prevData => ({
                ...prevData,
                profilePic: reader.result
            }));
            localStorage.setItem('profileData', JSON.stringify(profileData));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Função chamada quando o ícone da foto de perfil é clicado
    const handleProfilePicClick = () => {
        setUploadVisible(true);
    };

    // Função para fechar o diálogo de upload de foto
    const handleUploadClose = () => {
        setUploadVisible(false);
    };

    return (
        <div className={style.profileContainer}>
            <Card className={style.mainCard}>
                <div className={style.profileHeader}>
                    <div className={style.profileImageContainer} onClick={handleProfilePicClick}>
                        <img src={profileData.profilePic} alt="Profile" className={style.profileImage} />
                    </div>
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
                        <p>RG: {profileData.idCard}</p>
                        <p>CPF: {profileData.cpf}</p>
                    </div>

                    <div className={style.profileSection}>
                        <h2>Endereço</h2>
                        <p>Rua: {profileData.address}</p>
                        <p>Bairro: {profileData.neighborhood}</p>
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
                    <div className={style.dialogSection}>
                        <span>CEP:</span>
                        <InputText name="zip" value={editData.zip} onChange={handleInputChange} className={style.inputField} />
                    </div>
                    <div className={style.dialogSection}>
                        <span>Rua:</span>
                        <InputText name="address" value={editData.address} onChange={handleInputChange} className={style.inputField} />
                    </div>
                    <div className={style.dialogSection}>
                        <span>Bairro:</span>
                        <InputText name="neighborhood" value={editData.neighborhood} onChange={handleInputChange} className={style.inputField} />
                    </div>
                    <div className={style.dialogSection}>
                        <span>Cidade:</span>
                        <InputText name="city" value={editData.city} onChange={handleInputChange} className={style.inputField} />
                    </div>
                    <div className={style.dialogSection}>
                        <span>Estado:</span>
                        <InputText name="state" value={editData.state} onChange={handleInputChange} className={style.inputField} />
                    </div>
                </div>
            </Dialog>

            <Dialog
                header="Alterar Foto do Perfil"
                visible={uploadVisible}
                onHide={handleUploadClose}
                className={style.uploadDialog}
            >
                <FileUpload
                    mode="basic"
                    auto
                    customUpload
                    name="profilePic"
                    accept="image/*"
                    uploadHandler={handleUpload}
                    className={style.fileUpload}
                />
            </Dialog>
        </div>
    );
};

export default Profile;
