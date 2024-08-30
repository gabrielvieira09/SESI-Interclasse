import React from "react";
import Header from "../components/Header";
import "../Esporte.css"
import volei from "../assets/Volei.png"
import futsal from "../assets/Futsal.png"
import tenis from "../assets/Tenis_de_mesa.png"
import atletismo from "../assets/Atletismo.png"
import handebol from "../assets/Handebol.png"
import basquete from "../assets/Basquete.png"
import queimada from "../assets/Queimada.png"
import futmesa from "../assets/Futmesa.png"
import Footer from "../components/Footer";

function Esporte() {
  return (
   <div className="container_esporte">
      <Header />
      <div className="div_title" style={{width:"100%", height:100,marginBottom:50}}>
         <h1 className="title-esportes">Esportes</h1>
      </div>
      <div className="div_esportes">
         <div>
            <a href="/volei">
            <img className="esportes" src={volei}/>
            </a>

            <a href="/futsal">   
            <img className="esportes" src={futsal}/>
            </a>

            <a href="/tenis_de_mesa">  
            <img className="esportes" src={tenis}/>
            </a>

            <a href="/atletismo">
            <img className="esportes" src={atletismo}/>
            </a>
         </div>
         <div>
         <a href="/handebol">
         <img className="esportes" src={handebol}/>
         </a>

         <a href="/basquete">
         <img className="esportes" src={basquete}/>
         </a>
         <a href="/queimada">
         <img className="esportes" src={queimada}/>
         </a>
         <a href="/futmesa">
         <img className="esportes" src={futmesa}/>
         </a>
         </div>
      </div>
      <Footer/>
   </div>
  );
}
export default Esporte;
