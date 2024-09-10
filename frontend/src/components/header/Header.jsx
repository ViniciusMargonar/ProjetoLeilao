import React from "react";
import style from "./Header.module.css";
import { Menubar } from 'primereact/menubar';
import homeIcon from '../../assets/trauctionLogo.png';
import Logout from "../../components/logout/Logout";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLanguage);
    };

    const items = [
        {
            template: (item, options) => {
                return (
                    <div className={options.className} style={{ display: 'flex', alignItems: 'left' }}>
                        <img src={homeIcon} alt={t('Home Page')} style={{ width: '50px', marginRight: '8px' }} />
                        <span>{item.label}</span>
                    </div>
                );
            }
        },
        {
            label: (t('Home Page')),
            icon: 'pi pi-home',
            command: () => navigate('/')
        },
        {
            label: (t('Profile')),
            icon: 'pi pi-user',
            command: () => navigate('/profile')
        },
        {
            label: (t('Auctions')),
            icon: 'pi pi-warehouse',
            items: [
                {
                    label: (t('Trucks')),
                    icon: 'pi pi-truck',
                    items: [
                        { label: 'DAF' },
                        { label: 'Iveco' },
                        { label: 'Mercedes-Benz' },
                        { label: 'Scania' },
                        { label: 'Volkswagen' },
                        { label: 'Volvo' }
                    ]
                },
                {
                    label: (t('Harvesters')),
                    icon: 'pi pi-truck',
                    items: [
                        { label: 'Case' },
                        { label: 'Claas' },
                        { label: 'Fendt' },
                        { label: 'John Deere' },
                        { label: 'Massey Ferguson' },
                        { label: 'New Holland' },
                        { label: 'Sampo Rosenlew' },
                        { label: 'Valtra' }
                    ]
                },
                {
                    label: t('Implements'),
                    icon: 'pi pi-truck',
                    items: [
                        {
                            label: t('Leveling Grid'),
                            icon: 'pi pi-truck',
                            items: [
                                { label: 'DMB' },
                                { label: 'Santa Izabel' },
                                { label: 'Hidralmor' },
                                { label: 'John Deere' },
                                { label: 'Serrat' }
                            ]
                        },
                        {
                            label: t('Sprayers'),
                            icon: 'pi pi-truck',
                            items: [
                                { label: 'DMB' },
                                { label: 'Santa Izabel' },
                                { label: 'Bertini' },
                                { label: 'Jacto' },
                                { label: 'Sprit' }
                            ]
                        },
                        {
                            label: t('Planters'),
                            icon: 'pi pi-truck',
                            items: [
                                { label: 'Bertini' },
                                { label: 'DMB' },
                                { label: 'John Deere' },
                                { label: 'Kuhn' },
                                { label: 'Serrat' }
                            ]
                        },
                        {
                            label: t('Plows'),
                            icon: 'pi pi-truck',
                            items: [
                                { label: 'Bertini' },
                                { label: 'DMB' },
                                { label: 'John Deere' },
                                { label: 'Kuhn' },
                                { label: 'Serrat' }
                            ]
                        },
                        {
                            label: t('Rakes'),
                            icon: 'pi pi-truck',
                            items: [
                                { label: 'DMB' },
                                { label: 'John Deere' },
                                { label: 'Kuhn' },
                                { label: 'Serrat' },
                                { label: 'Valtra' }
                            ]
                        }
                    ]
                },
                {
                    label: t('Tractors'),
                    icon: 'pi pi-truck',
                    items: [
                        { label: 'Case' },
                        { label: 'Fendt' },
                        { label: 'JCB' },
                        { label: 'John Deere' },
                        { label: 'Kubota' },
                        { label: 'Massey Ferguson' },
                        { label: 'New Holland' },
                        { label: 'Valtra' },
                        { label: 'Zetor' }
                    ]
                }
            ]
        },
        {
            label: t('Create Auction'),
            icon: 'pi pi-tags'
        },
        {
            label: t('Dashboard'),
            icon: 'pi pi-chart-pie',
            command: () => navigate('/dashboard')
        },
        {
            label: t('Change Language'),
            icon: 'pi pi-sync',
            command: () => toggleLanguage()
        },
        {
            template: () => <Logout />
        }
    ];

    return (
        <div className={`w-full ${style.header}`}>
            <Menubar 
                className={style.menu}
                model={items}
                breakpoint="960px"
            />
        </div>
    );
}

export default Header;
