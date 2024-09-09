import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Logout.module.css";

const Logout = () => {
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
                label='Deslogar' 
                onClick={logout}
            />
        </>
    )
}
export default Logout;