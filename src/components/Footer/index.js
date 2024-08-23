import React from "react";
import "./style.css";
import logo_sesi from "../../assets/logo_sesi.png"

function Footer() {
    return (
        <div className="footer">
            <div style={{visibility:"collapse", width:100}}></div>
            <div>
               <p>SENAI - Análise e Desenvolvimento de Sistemas | Multimídia</p>
            </div>
            <div>
               <img id="logo_sesi" src={logo_sesi}/>
            </div>
        </div>
    );
}

export default Footer;