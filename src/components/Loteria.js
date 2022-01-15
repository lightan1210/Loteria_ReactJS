import React from "react";
import "./Loteria.css";

import Bolillero from "./Bolillero";
import Tablero from "./Tablero";

class Loteria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: null,
      salieron: [],
    };

    this.obtener_numero = this.obtener_numero.bind(this);
    this.reiniciar_bingo = this.reiniciar_bingo.bind(this);
  }

  reiniciar_bingo() {
    this.setState({
      numero: null,
      salieron: [],
    });
  }

  obtener_numero() {
    let valor;

    valor = Math.floor(Math.random() * (100 - 0) + 0);

    while (this.state.salieron.includes(valor))
      valor = Math.floor(Math.random() * (100 - 0) + 0);

    this.state.salieron.push(valor);

    this.setState({
      numero: valor,
    });
  }

  render() {
      return (
        <>
          <div>HOLA LOTERIA</div>
          <button onClick={this.reiniciar_bingo}>REINICIAR</button>
          <Bolillero numero={this.state.numero} />
          <button onClick={this.obtener_numero}>OBTENER</button>
          <Tablero salieron={this.state.salieron} />
        </>
      );
  }
}

export default Loteria;
