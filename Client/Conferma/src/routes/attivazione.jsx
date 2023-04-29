import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

import Titolo from "./titolo";

import "../css/attivazione.css"


function Attivazione(){

  function Id()
  {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id')
    console.log(id);
  }
  Id();

  const [OrarioDalle, setOraioDalle] = useState("")
  const [OrarioAlle, setOraioAlle] = useState("")
  const [Nome, setNome] = useState("")
  const [Risposta, setRisposta] = useState({})

  const navigate = useNavigate();

  const handleChangeOrarioDalle = (event) => {
    setOraioDalle(event.target.value);
  }
  const handleChangeOrarioAlle = (event) => {
    setOraioAlle(event.target.value);
  }
  const handleChangeNome = (event) => {
    setNome(event.target.value);
  }
  const handleChangeRisposta = (event) => {
    setRisposta(event.target.value);
  }

  const handleSubmit = (event) => {
    navigate("/conferma");
  }

  return(

    <div>

      <div className="titolo">
        <Titolo nomePagina={"Segnalazione"} />
      </div>

      

      <div className="risposta">
        <form>
          
          <div className="container">
            <div>
              <legend align="left" className="legenda">Tempo di risposta:</legend>
            </div>

            <div className="select">
              <select value={Risposta} onChange={handleChangeRisposta} name="tipologia">
                <option></option>
                <option value="1"> &lt; 30min </option>
                <option value="2"> &#126; 1h </option>
                <option value="3"> &#126; 2h </option>
                <option value="4"> &#126; 3h </option>
                <option value="5"> &gt; 3h </option>
              </select>
            </div>
          </div>

          <div className="orari">
            
            <legend className="legendaOrari">Disponibilità oraria:</legend>
            <div className="dalle">
            <input className="input1" type="text" name='OrarioDalle' 
                value={OrarioDalle || ""} onChange={handleChangeOrarioDalle} 
                placeholder='dalle'/>
            </div>
            <div className="alle">
            <input className="input1" type="text" name='OrarioAlle' 
              value={OrarioAlle || ""} onChange={handleChangeOrarioAlle} 
              placeholder='alle'/> 
            </div>
             
          </div>
          
          <div className="nome">
            <legend className="legenda">Nome evento: </legend>
            <input className="input2" type="text" name='Nome' 
              value={Nome || ""} onChange={handleChangeNome} 
              placeholder='Inserisci un nome personalizzato'/> 
          </div>  

    
          <input type="submit" className="bottone" value="CONFERMA" onClick={handleSubmit}/>
    
        </form>

      </div>

    </div>
  )
}

export default Attivazione

