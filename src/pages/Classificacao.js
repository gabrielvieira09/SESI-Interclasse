import React from "react";
import Header from "../components/Header";
import "../Classificacao.css"
import Footer from "../components/Footer";
import tcheca from "../assets/Tcheca_flag.png"
import angola from "../assets/Angola_flag.png"
import alemanha from "../assets/Alemanha_flag.png"
import brasil from "../assets/Brasil_flag.png"
import italia from "../assets/Italia_flag.png"
import inglaterra from "../assets/Inglaterra_flag.png"
import canada from "../assets/Canada_flag.png"
import belgica from "../assets/Belgica_flag.png"

function Classificacao() {
  return (
   <div className="container_pontuacao">
      <Header />
      <div className="div_title" style={{width:"100%", height:50,marginBottom:50}}>
         <h1 className="title">Pontuação</h1>
      </div>

   <div className="todas-pontuação">
      {/* Tabela do VÔLEI */}
   <div className="pontuacao-linha">
      <div className="pontuacao_div">
         <div className="tabela-pontuacao">
            <div className="tabela-pontuacao-header">
               <div className="tabela-pontuacao-header-div-1">
                  <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Vôlei</text>
               </div>
               <div className="tabela-pontuacao-header-div-2">
                  <text>Pontos</text>
                  <text>Jogos</text>
               </div>
            </div>            
            <div style={{height:400}}>
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={tcheca}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={angola}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={inglaterra}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={alemanha}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={canada}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={italia}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={belgica}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={brasil}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
            </div>
         </div>
      </div>


      {/* Tabela do FUTSAL */}

      <div className="pontuacao_div">
         <div className="tabela-pontuacao">
            <div className="tabela-pontuacao-header">
            <div className="tabela-pontuacao-header-div-1">
                  <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Futsal</text>
               </div>
               <div className="tabela-pontuacao-header-div-2">
                  <text>Pontos</text>
                  <text>Jogos</text>
               </div>
            </div>            
            <div style={{height:400}}>
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={tcheca}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={angola}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={inglaterra}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={alemanha}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={canada}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={italia}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={belgica}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={brasil}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
            </div>
         </div>
      </div>

      
      {/* Tabela do TÊNIS DE MESA */}

      <div className="pontuacao_div">
         <div className="tabela-pontuacao">
            <div className="tabela-pontuacao-header">
            <div className="tabela-pontuacao-header-div-1">
                  <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Tênis de Mesa</text>
               </div>
               <div className="tabela-pontuacao-header-div-2">
                  <text>Pontos</text>
                  <text>Jogos</text>
               </div>
            </div>            
            <div style={{height:400}}>
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={tcheca}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={angola}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={inglaterra}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={alemanha}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={canada}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={italia}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={belgica}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={brasil}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
            </div>
         </div>
      </div>
      </div>


      {/* Tabela do ATLETISMO */}

      <div className="pontuacao-linha">
      <div className="pontuacao_div">
         <div className="tabela-pontuacao">
            <div className="tabela-pontuacao-header">
            <div className="tabela-pontuacao-header-div-1">
                  <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Atletismo</text>
               </div>
               <div className="tabela-pontuacao-header-div-2">
                  <text>Pontos</text>
                  <text>Jogos</text>
               </div>
            </div>            
            <div style={{height:400}}>
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={tcheca}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={angola}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={inglaterra}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={alemanha}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={canada}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={italia}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={belgica}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={brasil}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
            </div>
         </div>
      </div>


      {/* Tabela do HANDEBOL */}

      <div className="pontuacao_div">
         <div className="tabela-pontuacao">
            <div className="tabela-pontuacao-header">
            <div className="tabela-pontuacao-header-div-1">
                  <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Handebol</text>
               </div>
               <div className="tabela-pontuacao-header-div-2">
                  <text>Pontos</text>
                  <text>Jogos</text>
               </div>
            </div>            
            <div style={{height:400}}>
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={tcheca}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={angola}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={inglaterra}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={alemanha}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={canada}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={italia}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={belgica}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={brasil}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
            </div>
         </div>
      </div>


      {/* Tabela do BASQUETE */}

      <div className="pontuacao_div">
         <div className="tabela-pontuacao">
            <div className="tabela-pontuacao-header">
            <div className="tabela-pontuacao-header-div-1">
                  <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Basquete</text>
               </div>
               <div className="tabela-pontuacao-header-div-2">
                  <text>Pontos</text>
                  <text>Jogos</text>
               </div>
            </div>            
            <div style={{height:400}}>
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={tcheca}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={angola}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={inglaterra}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={alemanha}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={canada}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={italia}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={belgica}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={brasil}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
            </div>
         </div>
      </div>
      </div>


      {/* Tabela da QUEIMADA */}

      <div className="pontuacao-linha">
      <div className="pontuacao_div">
         <div className="tabela-pontuacao">
            <div className="tabela-pontuacao-header">
            <div className="tabela-pontuacao-header-div-1">
                  <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Queimada</text>
               </div>
               <div className="tabela-pontuacao-header-div-2">
                  <text>Pontos</text>
                  <text>Jogos</text>
               </div>
            </div>            
            <div style={{height:400}}>
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={tcheca}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={angola}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={inglaterra}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={alemanha}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={canada}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={italia}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={belgica}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={brasil}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
            </div>
         </div>
      </div>


      {/* Tabela do FUTMESA */}

      <div className="pontuacao_div">
         <div className="tabela-pontuacao">
            <div className="tabela-pontuacao-header">
            <div className="tabela-pontuacao-header-div-1">
                  <text style={{fontSize:20, marginTop:-20, fontWeight:"bold"}}>Futmesa</text>
               </div>
               <div className="tabela-pontuacao-header-div-2">
                  <text>Pontos</text>
                  <text>Jogos</text>
               </div>
            </div>            
            <div style={{height:400}}>
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>1.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={tcheca}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>2.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={angola}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>3º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>3.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={inglaterra}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>4.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={alemanha}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>2º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>5.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={canada}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>6.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={italia}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>1º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>7.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={belgica}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º B</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
               <div className="tabela-pontuacao-times">
                  <text style={{fontSize:20, marginRight:10, color:"white"}}>8.</text>
                  <main>
                     <div id="tabela-pontuacao-flag">
                        <img src={brasil}/>
                     </div>
                     <div id="tabela-pontuacao-div-1">
                        <text style={{fontSize:20, marginLeft:10, fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>9º A</text>
                     </div>
                     <div id="tabela-pontuacao-div-2">
                        <text style={{marginLeft:22}}>0</text>   
                        <text style={{marginRight:22}}>0</text>   
                     </div>   
                  </main>   
               </div>   
            </div>
         </div>
      </div>
      </div>
   </div>   
      <Footer/>
   </div>
  );
}
export default Classificacao;
