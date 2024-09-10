import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>{t('About us')}</h3>
                    <ul>
                        <li><a href="#quem-somos">{t('Who we Are')}</a></li>
                        <li><a href="#como-vender">{t('How to sell')}</a></li>
                        <li><a href="#blog">{t('Instagram')}</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>{t('Contacts')}</h3>
                    <ul>
                        <li><a href="mailto:contato@trauction.com">{t('Email')}: contato@trauction.com</a></li>
                        <li><a href="tel:+5511999999999">{t('Phone')}: +55 44 4002-8922</a></li>
                        <li><a href="#localizacao">{t('Location')}: Paranavaí - PR</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>{t('Products')}</h3>
                    <ul>
                        <li><a href="#leiloes">{t('Auctions')}</a></li>
                        <li><a href="#implementos">{t('Equipment')}</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Trauction. {t('All rights reserved')}.</p>
            </div>
        </div>
    );
};

export default Footer;
