import React from "react";
import "../Desenvolvedores.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import gabriel from "../assets/foto_gabriel.jpg"
import jose from "../assets/foto_jose.png"
import arthur from "../assets/foto_arthur.jpg"
import gian from "../assets/foto_giancarlo.jpg"
import dani from "../assets/foto_daniele.png"
import lorena from "../assets/foto_lorena.png"
import leandra from "../assets/foto_leandra.jpg"
import miguel from "../assets/foto_miguel.jpg"


function Desenvolvedores()  {
  return (
     <div className="desenvolvedores-container">
      <Header/>
      <div className="div-dev-title" style={{width:"100%", height:100,marginBottom:50}}>
         <h1 className="dev-title">Desenvolvedores</h1>
      </div>
      <div style={{display:"flex", flexDirection:"column", marginBottom:30, justifyContent:"center", alignItems:"center"}}>
         <div className="div-names">
            <text className="names">Dev:</text>
         </div>
         <div className="desenvolvedores-caixas">
            <div className="caixas-dev">
               <div className="caixas-dev-div-1">
                  <img style={{width:130, height:130, borderRadius:100}} src={gabriel}/>
               </div>
               <div className="caixas-dev-div-2">
                  <div className="caixas-dev-div-2-nome">
                     <text>Gabriel Afonso</text>
                  </div>
                  <div style={{width:250, height:70, backgroundColor:"#C4CDFF", borderRadius:10, marginTop:7.5}}>
                     <text style={{marginTop:20, fontSize:17.5,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Desenvolveu a página Home e página Esportes</text>
                  </div>
               </div>
            </div>
            <div className="caixas-dev" >
            <div className="caixas-dev-div-1">
                  <img style={{width:130, height:130, borderRadius:100}} src={jose}/>
               </div>
               <div className="caixas-dev-div-2">
                  <div className="caixas-dev-div-2-nome">
                     <text>José Afonso</text>
                  </div>
                  <div style={{width:250, height:70, backgroundColor:"#C4CDFF", borderRadius:10, marginTop:7.5}}>
                     <text style={{marginTop:20, fontSize:17.5,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}> Desenvolveu as páginas de cada esporte</text>
                  </div>
               </div>
            </div>
            <div className="caixas-dev" >
            <div className="caixas-dev-div-1">
                  <img style={{width:130, height:130, borderRadius:100}} src={arthur}/>
               </div>
               <div className="caixas-dev-div-2">
                  <div className="caixas-dev-div-2-nome">
                     <text>Arthur dos Santos</text>
                  </div>
                  <div style={{width:250, height:70, backgroundColor:"#C4CDFF", borderRadius:10, marginTop:7.5}}>
                     <text style={{marginTop:20, fontSize:17.5,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Desenvolveu a página dos Desenvolvedores</text>
                  </div>
               </div>
            </div>
            <div className="caixas-dev" >
            <div className="caixas-dev-div-1">
                  <img style={{width:130, height:130, borderRadius:100}} src={miguel}/>
               </div>
               <div className="caixas-dev-div-2">
                  <div className="caixas-dev-div-2-nome">
                     <text>Miguel Aguiar</text>
                  </div>
                  <div style={{width:250, height:70, backgroundColor:"#C4CDFF", borderRadius:10, marginTop:7.5}}>
                     <text style={{marginTop:20, fontSize:17.5,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Desenvolveu a página Classificação</text>
                  </div>
               </div>
            </div>
         </div> 
         <div className="div-names">
            <text className="names">Multimída:</text>
         </div>
         <div className="desenvolvedores-caixas">
            <div className="caixas-dev" >
            <div className="caixas-dev-div-1">
                  <img style={{width:130, height:130, borderRadius:100}} src={gian}/>
               </div>
               <div className="caixas-dev-div-2">
                  <div className="caixas-dev-div-2-nome">
                     <text>Giancarlo</text>
                  </div>
                  <div style={{width:250, height:70, backgroundColor:"#C4CDFF", borderRadius:10, marginTop:7.5}}>
                     <text style={{marginTop:20, fontSize:17.5,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Produziu a página Home FIGMA</text>
                  </div>
               </div>
            </div>
            <div className="caixas-dev" >
            <div className="caixas-dev-div-1">
                  <img style={{width:130, height:130, borderRadius:100}} src={dani}/>
               </div>
               <div className="caixas-dev-div-2">
                  <div className="caixas-dev-div-2-nome">
                     <text>Daniele Ramalho</text>
                  </div>
                  <div style={{width:250, height:70, backgroundColor:"#C4CDFF", borderRadius:10, marginTop:7.5}}>
                     <text style={{marginTop:20, fontSize:15,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Projetou a página Esportes, as páginas de cada esporte e a página Desenvolvedores FIGMA</text>
                  </div>
               </div>
            </div>
            <div className="caixas-dev" >
            <div className="caixas-dev-div-1">
                  <img style={{width:130, height:130, borderRadius:100}} src={lorena}/>
               </div>
               <div className="caixas-dev-div-2">
                  <div className="caixas-dev-div-2-nome">
                     <text>Lorena</text>
                  </div>
                  <div style={{width:250, height:70, backgroundColor:"#C4CDFF", borderRadius:10, marginTop:7.5}}>
                     <text style={{marginTop:20, fontSize:17.5,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Fez a logo do interclasse</text>
                  </div>
               </div>
            </div>
            <div className="caixas-dev" >
            <div className="caixas-dev-div-1">
                  <img style={{width:130, height:130, borderRadius:100}} src={leandra}/>
               </div>
               <div className="caixas-dev-div-2">
                  <div className="caixas-dev-div-2-nome">
                     <text>Leandra</text>
                  </div>
                  <div style={{width:250, height:70, backgroundColor:"#C4CDFF", borderRadius:10, marginTop:7.5}}>
                     <text style={{marginTop:20, fontSize:17.5,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Produziu a página Classificação FIGMA</text>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <Footer/>      
    </div>
   );
}

export default Desenvolvedores;