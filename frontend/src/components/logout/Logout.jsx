import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }
    return(
        <>
            <Button label='Logout' onClick={logout}/>
        </>
    )
}
export default Logout;