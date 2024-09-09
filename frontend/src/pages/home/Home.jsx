import React, { useState } from "react";
import Logout from "../../components/logout/Logout";
import style from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";
import { Paginator } from "primereact/paginator";
import { Card } from 'primereact/card';
import homeIcon from '../../assets/trauctionLogo.png';



const Home = () =>{

    const data = [
        { id: 1, tituloDoAnuncio: 'Caminhão DAF XF', ano: '2018', quilometragem: '150000km', tipo: 'caminhão', marca: 'daf', descricao: 'Caminhão em excelente estado, pouco uso.' },
        { id: 2, tituloDoAnuncio: 'Caminhão IVECO Stralis', ano: '2019', quilometragem: '120000km', tipo: 'caminhão', marca: 'iveco', descricao: 'Caminhão com manutenção em dia.' },
        { id: 3, tituloDoAnuncio: 'Caminhão Mercedes-Benz Actros', ano: '2020', quilometragem: '80000km', tipo: 'caminhão', marca: 'mercedes-benz', descricao: 'Caminhão com poucas horas de uso.' },
        { id: 4, tituloDoAnuncio: 'Caminhão Scania R 440', ano: '2017', quilometragem: '200000km', tipo: 'caminhão', marca: 'scania', descricao: 'Caminhão robusto e confiável.' },
        { id: 5, tituloDoAnuncio: 'Caminhão Volkswagen Constellation', ano: '2016', quilometragem: '250000km', tipo: 'caminhão', marca: 'volkswagen', descricao: 'Caminhão em bom estado geral.' },
        { id: 6, tituloDoAnuncio: 'Caminhão Volvo FH16', ano: '2021', quilometragem: '50000km', tipo: 'caminhão', marca: 'volvo', descricao: 'Caminhão com garantia de fábrica.' },
        { id: 7, tituloDoAnuncio: 'Colhedora Case IH 8230', ano: '2018', horimetro: '400h', tipo: 'colhedora', marca: 'case', descricao: 'Colhedora com baixa hora de uso.' },
        { id: 8, tituloDoAnuncio: 'Colhedora Claas Lexion 780', ano: '2019', horimetro: '350h', tipo: 'colhedora', marca: 'claas', descricao: 'Colhedora em ótimo estado.' },
        { id: 9, tituloDoAnuncio: 'Colhedora Fendt Ideal 8T', ano: '2020', horimetro: '200h', tipo: 'colhedora', marca: 'fendt', descricao: 'Colhedora com alta performance.' },
        { id: 10, tituloDoAnuncio: 'Colhedora John Deere S780', ano: '2017', horimetro: '500h', tipo: 'colhedora', marca: 'john deere', descricao: 'Colhedora muito bem conservada.' },
        { id: 11, tituloDoAnuncio: 'Colhedora Massey Ferguson 7370', ano: '2018', horimetro: '450h', tipo: 'colhedora', marca: 'massey ferguson', descricao: 'Colhedora eficiente e econômica.' },
        { id: 12, tituloDoAnuncio: 'Colhedora New Holland CR8.90', ano: '2019', horimetro: '300h', tipo: 'colhedora', marca: 'new holland', descricao: 'Colhedora com tecnologia avançada.' },
        { id: 13, tituloDoAnuncio: 'Colhedora Sampo Rosenlew C9', ano: '2020', horimetro: '250h', tipo: 'colhedora', marca: 'sampo rosenlew', descricao: 'Colhedora de alta capacidade.' },
        { id: 14, tituloDoAnuncio: 'Colhedora Valtra A74', ano: '2021', horimetro: '150h', tipo: 'colhedora', marca: 'valtra', descricao: 'Colhedora com baixo uso e ótima manutenção.' },
        { id: 15, tituloDoAnuncio: 'Grade Niveladora DMB GN 300', ano: '2021', tipo: 'implemento', marca: 'dmb', categoria: 'grade niveladora', descricao: 'Grade niveladora robusta e eficiente.' },
        { id: 16, tituloDoAnuncio: 'Grade Niveladora Santa Izabel G300', ano: '2022', tipo: 'implemento', marca: 'santa izabel', categoria: 'grade niveladora', descricao: 'Grade niveladora nova e com garantia.' },
        { id: 17, tituloDoAnuncio: 'Grade Niveladora Hidralmor GN 350', ano: '2022', tipo: 'implemento', marca: 'hidralmor', categoria: 'grade niveladora', descricao: 'Grade niveladora em excelente estado.' },
        { id: 18, tituloDoAnuncio: 'Grade Niveladora John Deere GN 400', ano: '2021', tipo: 'implemento', marca: 'john deere', categoria: 'grade niveladora', descricao: 'Grade niveladora de alta performance.' },
        { id: 19, tituloDoAnuncio: 'Grade Niveladora Serrat GN 300', ano: '2023', tipo: 'implemento', marca: 'serrat', categoria: 'grade niveladora', descricao: 'Grade niveladora nova e com pouca utilização.' },
        { id: 20, tituloDoAnuncio: 'Pulverizador DMB PD 2000', ano: '2022', tipo: 'implemento', marca: 'dmb', categoria: 'pulverizadores', descricao: 'Pulverizador eficiente e bem conservado.' },
        { id: 21, tituloDoAnuncio: 'Pulverizador Santa Izabel PS 1000', ano: '2021', tipo: 'implemento', marca: 'santa izabel', categoria: 'pulverizadores', descricao: 'Pulverizador em ótimo estado de conservação.' },
        { id: 22, tituloDoAnuncio: 'Pulverizador Bertini PB 1500', ano: '2023', tipo: 'implemento', marca: 'bertini', categoria: 'pulverizadores', descricao: 'Pulverizador com tecnologia de ponta.' },
        { id: 23, tituloDoAnuncio: 'Pulverizador Jacto PT 2000', ano: '2022', tipo: 'implemento', marca: 'jacto', categoria: 'pulverizadores', descricao: 'Pulverizador com pouco uso.' },
        { id: 24, tituloDoAnuncio: 'Pulverizador Sprit PS 3000', ano: '2023', tipo: 'implemento', marca: 'sprit', categoria: 'pulverizadores', descricao: 'Pulverizador novo e com garantia.' },
        { id: 25, tituloDoAnuncio: 'Plantadeira Bertini PB 3000', ano: '2022', tipo: 'implemento', marca: 'bertini', categoria: 'plantadeiras', descricao: 'Plantadeira em ótimo estado.' },
        { id: 26, tituloDoAnuncio: 'Plantadeira DMB PD 4000', ano: '2023', tipo: 'implemento', marca: 'dmb', categoria: 'plantadeiras', descricao: 'Plantadeira com alta capacidade.' },
        { id: 27, tituloDoAnuncio: 'Plantadeira John Deere PJ 5000', ano: '2022', tipo: 'implemento', marca: 'john deere', categoria: 'plantadeiras', descricao: 'Plantadeira com tecnologia moderna.' },
        { id: 28, tituloDoAnuncio: 'Plantadeira Kuhn PK 6000', ano: '2023', tipo: 'implemento', marca: 'kuhn', categoria: 'plantadeiras', descricao: 'Plantadeira nova e com garantia.' },
        { id: 29, tituloDoAnuncio: 'Plantadeira Serrat PS 3000', ano: '2022', tipo: 'implemento', marca: 'serrat', categoria: 'plantadeiras', descricao: 'Plantadeira em bom estado de conservação.' },
        { id: 30, tituloDoAnuncio: 'Arado Bertini AB 400', ano: '2021', tipo: 'implemento', marca: 'bertini', categoria: 'arados', descricao: 'Arado robusto e eficiente.' },
        { id: 31, tituloDoAnuncio: 'Arado DMB AD 500', ano: '2022', tipo: 'implemento', marca: 'dmb', categoria: 'arados', descricao: 'Arado com excelente desempenho.' },
        { id: 32, tituloDoAnuncio: 'Arado John Deere AJ 600', ano: '2021', tipo: 'implemento', marca: 'john deere', categoria: 'arados', descricao: 'Arado de alta durabilidade.' },
        { id: 33, tituloDoAnuncio: 'Arado Kuhn AK 700', ano: '2022', tipo: 'implemento', marca: 'kuhn', categoria: 'arados', descricao: 'Arado com tecnologia avançada.' },
        { id: 34, tituloDoAnuncio: 'Arado Serrat AS 800', ano: '2023', tipo: 'implemento', marca: 'serrat', categoria: 'arados', descricao: 'Arado novo e eficiente.' },
        { id: 35, tituloDoAnuncio: 'Enleirador DMB ED 400', ano: '2022', tipo: 'implemento', marca: 'dmb', categoria: 'enleiradores', descricao: 'Enleirador em ótimo estado.' },
        { id: 36, tituloDoAnuncio: 'Enleirador John Deere EJ 500', ano: '2021', tipo: 'implemento', marca: 'john deere', categoria: 'enleiradores', descricao: 'Enleirador com baixa utilização.' },
        { id: 37, tituloDoAnuncio: 'Enleirador Kuhn EK 600', ano: '2023', tipo: 'implemento', marca: 'kuhn', categoria: 'enleiradores', descricao: 'Enleirador novo e eficiente.' },
        { id: 38, tituloDoAnuncio: 'Enleirador Serrat ES 700', ano: '2022', tipo: 'implemento', marca: 'serrat', categoria: 'enleiradores', descricao: 'Enleirador com alta capacidade.' },
        { id: 39, tituloDoAnuncio: 'Enleirador Valtra EV 800', ano: '2021', tipo: 'implemento', marca: 'valtra', categoria: 'enleiradores', descricao: 'Enleirador em ótimo estado.' },
        { id: 40, tituloDoAnuncio: 'Trator Case IH Puma 180', ano: '2018', horimetro: '500h', tipo: 'trator', marca: 'case', descricao: 'Trator em excelente estado de conservação.' },
        { id: 41, tituloDoAnuncio: 'Trator Fendt 724', ano: '2019', horimetro: '400h', tipo: 'trator', marca: 'fendt', descricao: 'Trator com pouco uso e manutenção em dia.' },
        { id: 42, tituloDoAnuncio: 'Trator JCB Fastrac 4220', ano: '2020', horimetro: '300h', tipo: 'trator', marca: 'jcb', descricao: 'Trator com alta performance.' },
        { id: 43, tituloDoAnuncio: 'Trator John Deere 6195R', ano: '2017', horimetro: '600h', tipo: 'trator', marca: 'john deere', descricao: 'Trator em ótimo estado de conservação.' },
        { id: 44, tituloDoAnuncio: 'Trator Kubota M135GX', ano: '2018', horimetro: '450h', tipo: 'trator', marca: 'kubota', descricao: 'Trator com baixa utilização e manutenção em dia.' },
        { id: 45, tituloDoAnuncio: 'Trator Massey Ferguson 7480', ano: '2019', horimetro: '500h', tipo: 'trator', marca: 'massey ferguson', descricao: 'Trator com alta durabilidade e eficiência.' },
        { id: 46, tituloDoAnuncio: 'Trator New Holland T7.225', ano: '2020', horimetro: '400h', tipo: 'trator', marca: 'new holland', descricao: 'Trator com tecnologia avançada.' },
        { id: 47, tituloDoAnuncio: 'Trator Valtra T234', ano: '2021', horimetro: '300h', tipo: 'trator', marca: 'valtra', descricao: 'Trator novo e eficiente.' },
        { id: 48, tituloDoAnuncio: 'Trator Zetor 700cv', ano: '2015', horimetro: '300h', quilometragem: '1200km', tipo: 'trator', marca: 'zetor', descricao: 'Trator em ótimo estado de conservação.' }
    ];
    
       

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(6); // Ajuste o número de linhas exibidas por página
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <h1 className={`w-full ${style.trauction}`}>{t('auction')}</h1>

            <ul className={style.gridContainer}>
                {data.slice(first, first + rows).map((item) => (
                    <li className={style.cardItem} key={item.id}>
                        <Card className={style.principalCard}>
                            <div className={style.divCard}>
                                <img src={homeIcon} alt="Home Icon" className={style.cardImage} />
                                <Card className={style.secundarioCard}> 
                                    <h1>{item.tituloDoAnuncio}</h1>                                   
                                    <p>Ano: {item.ano}</p>
                                    <p>Tipo: {item.tipo}</p>
                                    <p>Marca: {item.marca}</p>
                                    {item.categoria && <p>Categoria: {item.categoria}</p>}
                                    {item.quilometragem && <p>Quilometragem: {item.quilometragem}</p>}
                                    {item.horimetro && <p>Horímetro: {item.horimetro}</p>}
                                    <p>Descrição: {item.descricao}</p>
                                </Card>
                            </div>
                        </Card>

                    </li>
                ))}
            </ul>

            <Paginator first={first} rows={rows} totalRecords={data.length} onPageChange={onPageChange} />

            

            {/* <Button
                label="English"
                onClick={() => changeLanguage('en')}
            />
            <Button
                label="Português"
                onClick={() => changeLanguage('pt-BR')}
            /> */}
        </div>
    );
}

export default Home;