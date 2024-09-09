import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Sobre a Trauction</h3>
                    <ul>
                        <li><a href="#quem-somos">Quem somos</a></li>
                        <li><a href="#como-vender">Como vender</a></li>
                        <li><a href="#imprensa">Imprensa</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contatos</h3>
                    <ul>
                        <li><a href="mailto:contato@trauction.com">Email: contato@trauction.com</a></li>
                        <li><a href="tel:+5511999999999">Telefone: +55 44 4002-8922</a></li>
                        <li><a href="#localizacao">Localização: Paranavaí - PR</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Produtos</h3>
                    <ul>
                        <li><a href="#leiloes">Leilões</a></li>
                        <li><a href="#implementos">Implementos</a></li>
                        <li><a href="#tratores">Tratores</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Trauction. Todos os direitos reservados.</p>
            </div>
        </div>
    );
};

export default Footer;
