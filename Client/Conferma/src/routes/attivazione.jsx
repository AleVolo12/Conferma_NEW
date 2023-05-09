import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

import Titolo from "./titolo";

import logo_maps from "../assets/logo_maps.png";

import "../css/attivazione.css"


function Attivazione(){

  const coordinate = "Via Roma 3, Milano (MI), 20120"
  const evento = "P2 - Alluvione"
  

  const [giornoInizio, setGiornoInizio] = useState("")
  const [giornoFine, setGiornoFine] = useState("")
  const [Nome, setNome] = useState("")
  const [Risposta, setRisposta] = useState({})
  const [Orario, setOrario] = useState({})

  const navigate = useNavigate();

  const handleChangeGiornoInizio = (event) => {
    setGiornoInizio(event.target.value);
  }
  const handleChangeGiornoFine  = (event) => {
    setGiornoFine(event.target.value);
  }
  const handleChangeNome = (event) => {
    setNome(event.target.value);
  }
  const handleChangeRisposta = (event) => {
    setRisposta(event.target.value);
  }

  const handleChangeOrario = (event) => {
    setOrario(event.target.value);
  }

  const handleSubmit = (event) => {
    navigate("/conferma");
  }

  return(

    <div>

      <div className="titolo">
        <Titolo nomePagina={"Risposta"} />
      </div>

      <div className="informazioni">
        <div className="indirizzo">
          <p>{coordinate}</p>
        </div>
        <div className="maps">
          <img src={logo_maps} width="100"/>
        </div>
        <div className="evento">
          <p>Evento: {evento}</p>
        </div>
       
        
      </div>

      <div className="linea">
        <hr width="100%" size="2" color="#FF6600"/>
      </div>
      
      <div className="risposta">
        <form>
          
          <div className="container">
            <div>
              <legend align="left" className="legenda">Tempo di risposta:</legend>
            </div>

            <div className="select">
              <select value={Risposta} onChange={handleChangeRisposta}>
                <option></option>
                <option value="<30min"> &lt; 30min </option>
                <option value="1h"> &#126; 1h </option>
                <option value="2h"> &#126; 2h </option>
                <option value="3h"> &#126; 3h </option>
                <option value=">3h"> &gt; 3h </option>
              </select>
            </div>
          </div>

          <div className="giorni">
            
            <legend className="legendaGiorni">Disponibilità giornaliera:</legend>
            <div className="inizio">
            <input className="input1" type="date" name='giornoInizio' 
                value={giornoInizio || ""} onChange={handleChangeGiornoInizio} 
                placeholder='dalle'/>
            </div>
            <div className="fine">
            <input className="input1" type="date" name='giornoFine' 
              value={giornoFine || ""} onChange={handleChangeGiornoFine} 
              placeholder='alle'/> 
            </div>
             
          </div>
          
          <div className="containerOrari">
            <legend className="legendaOrari"> Monte ore totale:  </legend>
            <div className="select">
              <select value={Orario} onChange={handleChangeOrario}>
                <option></option>
                <option value="1h-5h"> 1h-5h </option>
                <option value="5h-10h"> 5h-10h </option>
                <option value="10h-20h"> 10h-20h </option>
                <option value="20h-30h"> 20h-30h </option>
                <option value=">30h"> &gt; 30h </option>
              </select>
            </div>
          </div>

          <div className="nome">
            <legend className="legenda">Nome evento:</legend>
            <input className="input2" type="text" name='Nome' 
              value={Nome || ""} onChange={handleChangeNome} 
              placeholder='Inserisci un nome personalizzato'/> 
          </div>  
        </form>
      </div>
      <div className="linea2">
        <hr width="100%" size="2" color="#FF6600"/>
      </div>
      <input type="submit" className="bottone" value="CONFERMA RISPOSTA" onClick={handleSubmit}/>  
    </div>
  )
}

export default Attivazione

