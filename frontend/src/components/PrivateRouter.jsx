import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRouter = () =>{

    const isAuthenticated = !!localStorage.getItem("token"); //Se existir o isAuthenticaded, retorna true, se não, retorna false

    return (isAuthenticated?<Outlet/>:<Navigate to="/login"/>)
}

export default PrivateRouter;