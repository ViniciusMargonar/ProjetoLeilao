import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Logout.module.css";
import { useTranslation } from "react-i18next";

const Logout = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }


    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }
    return(
        <>
            <Button 
                className={style.logoutButton} 
                icon= 'pi pi-sign-out'
                label={t('Logout')}
                onClick={logout}
            />
        </>
    )
}
export default Logout;