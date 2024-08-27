import React from "react";

const SimpleLayout = ({children}) => {  /* Layout simples, mostra apenas a página sem o Header e Footer*/

    return(
        <>
            {children}        
        </>
    )
}
export default SimpleLayout;