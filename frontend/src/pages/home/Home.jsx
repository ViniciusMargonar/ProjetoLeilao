import React from "react";
import Logout from "../../components/logout/Logout";
import style from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";

const Home = () =>{
    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return(
        <div>
            <h1 className={`w-full ${style.textColor}`}>{t('welcome')} Página Inicial</h1> 
            {/* Classes com hífen devem conter [] - Exemplo: {` ${style['text-color']}`} */}
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