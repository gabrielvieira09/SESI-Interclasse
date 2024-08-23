import React from "react";
import "./style.css"
import logo from "../../assets/logo.png"
import { GoTrophy } from "react-icons/go";
import { FaVolleyballBall } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";

function Header(){
   return(
      <div className="container_header">
         <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <div>
               <img className="logo" src={logo}/>
            </div>
            <div  className="titulo" style={{marginLeft:20}}>
               <h1 style={{color:"white", fontFamily:"sans-serif"}}>SESI - Interclasse</h1>
            </div>
         </div>
         <div className="links">
            <div className="links-div">
               <div className="space" id="inicio">
                  <a style={{display:"flex", alignItems:"center", color:"white", textDecoration:"none", fontSize:20}} href="/">
                     <IoMdHome className="icone" />&nbsp;
                     Início
                  </a>
               </div>
               <div>
                  <text className="barra-1" style={{color:"white", fontSize:35, fontWeight:"bold"}}>|</text>
               </div>
               <div className="space">
                  <a style={{display:"flex", alignItems:"center", color:"white", textDecoration:"none", fontSize:20}} href="classificacao">
                     <GoTrophy className="icone" />&nbsp;
                     Classificação
                  </a>
               </div>
               <div>
                  <text className="barra-2" style={{color:"white", fontSize:35, fontWeight:"bold"}}>|</text>
               </div>
            </div>
            <div className="links-div">
               <div className="space">
                  <a style={{display:"flex", alignItems:"center", color:"white", textDecoration:"none", fontSize:20}} 
                  href="esportes">
                     <FaVolleyballBall className="icone" />&nbsp;
                     Esportes
                  </a>
               </div>
               <div>
                  <text style={{color:"white", fontSize:35, fontWeight:"bold"}}>|</text>
               </div>
               <div className="space">
                  <a style={{display:"flex", alignItems:"center", color:"white", textDecoration:"none", fontSize:20}} href="desenvolvedores">
                     <IoPersonSharp className="icone" />&nbsp;
                     Sobre Nós
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Header;