import React from "react";
import "../Home.css";
import esporte from "./Esporte"
import Header from "../components/Header";
import fundo from "../assets/fundo.png"
import aba_resultados from "../assets/aba_resultados.png"
import aba_esportes from "../assets/aba_esportes.png"
import Footer from "../components/Footer";
import tcheca from "../assets/Tcheca_flag.png"
import alemanha from "../assets/Alemanha_flag.png"
import angola from "../assets/Angola_flag.png"
import brasil from "../assets/Brasil_flag.png"
import inglaterra from "../assets/Inglaterra_flag.png"
import italia from "../assets/Italia_flag.png"
import canada from "../assets/Canada_flag.png"
import belgica from "../assets/Belgica_flag.png"


function Home() {
  return (
    <div className="container">
      <Header/>
      <div className="fundo_principal" >
         <img src={fundo}/>
      </div>
      <div className="hoje_container">
         <div className="hoje">
            <div className="hoje-header">
               <h1>HOJE:</h1>
            </div>
            <div className="hoje-content">
               <div className="div-jogo">
                  <text>Futebol</text>
               </div>
               <div className="div-hora">11:30</div>
               <div className="div-score-container">
                  <div className="div-time-score">
                     <text>3º B</text>
                     <img style={{borderRadius:5}} src={tcheca}/>
                  </div>
                  <div>
                     <text className="div-versus">x</text>
                  </div>
                  <div className="div-time-score">
                     <text>3º A</text>
                     <img src={angola}/>
                  </div>
               </div>          
            </div>
         </div>
      </div>
      <div className="tabela-classificacao">
         <div className="tabela-classificacao-header">
            <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Classificação</text>
            <text>Pontos</text>
            <text>Jogos</text>
         </div>            
         <div style={{height:400}}>
            <div className="tabela-classificacao-times">
               <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
               <main>
                  <div id="tabela-classificacao-flag">
                     <img src={tcheca}/>
                  </div>
                  <div id="tabela-classificacao-div-1">
                     <text style={{fontSize:25, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                  </div>
                  <div id="tabela-classificacao-div-2">
                     <text style={{marginLeft:21, fontSize:20}}>0</text>   
                     <text style={{marginRight:21, fontSize:20}}>0</text>   
                  </div>   
               </main>   
            </div>   
            <div className="tabela-classificacao-times">
               <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
               <main>
                  <div id="tabela-classificacao-flag">
                     <img src={angola}/>
                  </div>
                  <div id="tabela-classificacao-div-1">
                     <text style={{fontSize:25, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                  </div>
                  <div id="tabela-classificacao-div-2">
                     <text style={{marginLeft:21, fontSize:20}}>0</text>   
                     <text style={{marginRight:21, fontSize:20}}>0</text>   
                  </div>   
               </main>   
            </div>   
            <div className="tabela-classificacao-times">
               <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
               <main>
                  <div id="tabela-classificacao-flag">
                     <img src={inglaterra}/>
                  </div>
                  <div id="tabela-classificacao-div-1">
                     <text style={{fontSize:25, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                  </div>
                  <div id="tabela-classificacao-div-2">
                     <text style={{marginLeft:21, fontSize:20}}>0</text>   
                     <text style={{marginRight:21, fontSize:20}}>0</text>   
                  </div>   
               </main>   
            </div>   
            <div className="tabela-classificacao-times">
               <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
               <main>
                  <div id="tabela-classificacao-flag">
                     <img src={alemanha}/>
                  </div>
                  <div id="tabela-classificacao-div-1">
                     <text style={{fontSize:25, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                  </div>
                  <div id="tabela-classificacao-div-2">
                     <text style={{marginLeft:21, fontSize:20}}>0</text>   
                     <text style={{marginRight:21, fontSize:20}}>0</text>   
                  </div>   
               </main>   
            </div>   
            <div className="tabela-classificacao-times">
               <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
               <main>
                  <div id="tabela-classificacao-flag">
                     <img src={canada}/>
                  </div>
                  <div id="tabela-classificacao-div-1">
                     <text style={{fontSize:25, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                  </div>
                  <div id="tabela-classificacao-div-2">
                     <text style={{marginLeft:21, fontSize:20}}>0</text>   
                     <text style={{marginRight:21, fontSize:20}}>0</text>   
                  </div>   
               </main>   
            </div>   
            <div className="tabela-classificacao-times">
               <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
               <main>
                  <div id="tabela-classificacao-flag">
                     <img src={italia}/>
                  </div>
                  <div id="tabela-classificacao-div-1">
                     <text style={{fontSize:25, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                  </div>
                  <div id="tabela-classificacao-div-2">
                     <text style={{marginLeft:21, fontSize:20}}>0</text>   
                     <text style={{marginRight:21, fontSize:20}}>0</text>   
                  </div>   
               </main>   
            </div>   
            <div className="tabela-classificacao-times">
               <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
               <main>
                  <div id="tabela-classificacao-flag">
                     <img src={belgica}/>
                  </div>
                  <div id="tabela-classificacao-div-1">
                     <text style={{fontSize:25, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                  </div>
                  <div id="tabela-classificacao-div-2">
                     <text style={{marginLeft:21, fontSize:20}}>0</text>   
                     <text style={{marginRight:21, fontSize:20}}>0</text>   
                  </div>   
               </main>   
            </div>   
            <div className="tabela-classificacao-times">
               <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
               <main>
                  <div id="tabela-classificacao-flag">
                     <img src={brasil}/>
                  </div>
                  <div id="tabela-classificacao-div-1">
                     <text style={{fontSize:25, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                  </div>
                  <div id="tabela-classificacao-div-2">
                     <text style={{marginLeft:21, fontSize:20}}>0</text>   
                     <text style={{marginRight:21, fontSize:20}}>0</text>   
                  </div>   
               </main>   
            </div>   
         </div>            
      </div>
      <div className="abas">     
         <div>
            <a href="classificacao">
            <img className="aba-individual" id="aba_resultados" src={aba_resultados}/>
            </a>
         </div>
         <div>
            <a href="esportes">
            <img className="aba-individual" src={aba_esportes}/>
            </a>
         </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
