import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react";

import QRCode from "react-qr-code";

import Titolo from "./titolo";
import freccia from "../assets/freccia.png";

import "../css/conferma.css"

function Conferma()
{

  return(
    <div>
      <div className="messaggio">
        <p>La tua presenza è stata registrata con successo</p>
      </div>
      <img src={freccia} className="freccia"/>
      <div className="qrcode">
        <QRCode value="id"/>
          <p align="center">Mostra questo codice identificativo univoco all’hub di protezione civile</p>
      </div>
    </div>

  );

}

export default Conferma;