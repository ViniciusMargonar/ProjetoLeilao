import React, { useState } from "react";
import Logout from "../../components/logout/Logout";
import style from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";
import { Paginator } from "primereact/paginator";



const Home = () =>{

    const data = [
        {id: 1, name: 'Vinicius', email: '],@gmail.com'},
        {id: 2, name: 'Lucas', email: '],@gmail.com'},
        {id: 3, name: 'João', email: '],@gmail.com'},
        {id: 4, name: 'Maria', email: '],@gmail.com'},
    ]    

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(3);
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return(
        <div>   
            <h1 className={`w-full ${style.textColor}`}>{t('welcome')} Página Inicial</h1> 
            {/* Classes com hífen devem conter [] - Exemplo: {` ${style['text-color']}`} */}

            <ul>
                {data.slice(first, first + rows).map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.email}
                    </li>
                ))}
            </ul>
            <Paginator first={first} rows={rows} totalRecords={data.length} onPageChange={onPageChange}/>
            <Button
                label="English"
                onClick={() => changeLanguage('en')}
            />
            <Button
                label="Português"
                onClick={() => changeLanguage('pt-BR')}
            />
            <Logout/>
        </div>
    );
}
export default Home;