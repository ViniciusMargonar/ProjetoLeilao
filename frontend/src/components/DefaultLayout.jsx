import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const DefaultLayout = ({children}) => {  /* Layout padrão, mostrando o Header e o Footer*/

    return(
        <>
            <Header/>
                {children}
            <Footer/>        
        </>
    )
}
export default DefaultLayout;