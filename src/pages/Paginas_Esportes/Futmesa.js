import React from "react";

import image from "../../assets/ImgFutmesa.png";
import flag1 from "../../assets/Brasil_flag.png"
import flag2 from "../../assets/Alemanha_flag.png"
import flag3 from "../../assets/Canada_flag.png"
import flag4 from "../../assets/Belgica_flag.png"

import "../../components/Paginas.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";


import TimeCard from "../../components/TimeCard";
import Bandeira1 from "../../assets/Brasil_flag.png";
import Bandeira2 from "../../assets/Alemanha_flag.png";
import Bandeira3 from "../../assets/Canada_flag.png";
import Bandeira4 from "../../assets/Italia_flag.png";
import Bandeira5 from "../../assets/Angola_flag.png";
import Bandeira6 from "../../assets/Belgica_flag.png";
import Bandeira7 from "../../assets/Tcheca_flag.png";
import Bandeira8 from "../../assets/Inglaterra_flag.png";



function Futmesa(){

    const times = [
        { image: Bandeira1, rank: 1, wins: 10 },
        { image: Bandeira2, rank: 2, wins: 8 },
        { image: Bandeira3, rank: 3, wins: 7 },
        { image: Bandeira4, rank: 4, wins: 6 },
        { image: Bandeira5, rank: 5, wins: 5 },
        { image: Bandeira6, rank: 6, wins: 4 },
        { image: Bandeira7, rank: 7, wins: 3 },
        { image: Bandeira8, rank: 8, wins: 2 }
      ];
    
    return (
        <div className="container_pagina">
            
            <div className="container_pagina">
            <Header/>
            <img src={image} className="image_jogo"/>

            <div>
      <h1 style={{marginTop:'60px', marginBottom:'40px'}}>Lista de Times</h1>
      <div style={{ display: 'flex',justifyContent:'center', flexWrap: 'wrap', }}>
        {times.map((time, index) => (
          <TimeCard key={index} time={time} />
        ))}
      </div>
    </div>


            <div className="container_jogo">

            <div className="data">
             <div >Futmesa</div>
             <div>26/09-TER</div>
            </div>

            <hr className="linha"/>

            <div className="hora">08:30</div>


            <div className="times">
            <div className="time">3°B<img className="flag" src={flag1}/></div>
            <p>X</p>
            <div className="time">1°A<img  className="flag" src={flag2}/></div>

            </div>
            <hr/>

            <p className="hora">10:30</p>

            <div className="times">
                <div className="time">2°B<img  className="flag" src={flag3}/></div>
                <p>X</p>
                <div className="time">2°A<img  className="flag" src={flag4}/></div>
            
            </div>

            </div>

    

            </div>

            <Footer/>
       
      
    </div>

     
    );
}

export default Futmesa;

/* Group 96 */



