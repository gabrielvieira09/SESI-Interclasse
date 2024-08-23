import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Esporte from "./pages/Esporte";
import Desenvolvedores from "./pages/Desenvolvedores";
import Classificacao from "./pages/Classificacao";
import Volei from "./pages/Paginas_Esportes/Volei"
import Futsal from "./pages/Paginas_Esportes/Futsal"
import TenisDeMesa from "./pages/Paginas_Esportes/TenisDeMesa"
import Atletismo from "./pages/Paginas_Esportes/Atletismo"
import Handebol from "./pages/Paginas_Esportes/Handbol"
import Basquete from "./pages/Paginas_Esportes/Basquete"
import Queimada from "./pages/Paginas_Esportes/Queimada"
import Futmesa from "./pages/Paginas_Esportes/Futmesa"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
         <Route path="/" element={<Home />} />
         <Route path="/esportes" element={<Esporte />} />
         <Route path="/desenvolvedores" element={<Desenvolvedores />} />
         <Route path="/classificacao" element={<Classificacao />} />
         <Route path="/volei" element={<Volei />} />
         <Route path="/futsal" element={<Futsal />} />
         <Route path="/tenis_de_mesa" element={<TenisDeMesa />} />
         <Route path="/atletismo" element={<Atletismo />} />
         <Route path="/handebol" element={<Handebol />} />
         <Route path="/basquete" element={<Basquete />} />
         <Route path="/queimada" element={<Queimada />} />
         <Route path="/futmesa" element={<Futmesa />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
