import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faCoffee, faUndo } from '@fortawesome/free-solid-svg-icons'

import "./Loteria2.css";

import Bolillero from "./Bolillero2";
import Tablero from "./Tablero2";

function Loteria() {

  const [numero, setNumero] = useState(null);
  const [salieron, setSalieron] = useState([]);
  const [fin, setFin] = useState(false);

  useEffect(() => {

      if(salieron.length === 100)
          setFin(true);

  }, [salieron])

  function reiniciar_bingo() {
    setNumero(null);
    setSalieron([]);
    setFin(false);
  }

  function obtener_numero() {

    if(fin)
        return;

    let valor;

    valor = Math.floor(Math.random() * (100 - 0) + 0);

    while (salieron.includes(valor))
      valor = Math.floor(Math.random() * (100 - 0) + 0);

    setSalieron([...salieron, valor]);
    setNumero(valor);
  }



  return (
    /* 
        <i className="fas fa-undo" id="reset" onClick={reiniciar_bingo} ></i>
        <i className="fas fa-chevron-circle-right" id="siguiente" onClick={obtener_numero}></i>
        {fin ? "" : <button id="siguiente" onClick={obtener_numero}>SIGUIENTE</button>}
        <button id="reset" onClick={reiniciar_bingo} >REINICIAR</button>
    */
    <>
      <FontAwesomeIcon id="reset" icon={faUndo} onClick={reiniciar_bingo}/>
      <FontAwesomeIcon id="siguiente" icon={faChevronCircleRight} onClick={obtener_numero}/>
      {fin ? <div id="cartelFIN">JUEGO TERMINADO</div> : <Bolillero numero={numero} />}
      
      <Tablero salieron={salieron} />
    </>
  );
}

export default Loteria;
