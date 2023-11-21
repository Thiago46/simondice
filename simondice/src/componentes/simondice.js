import React, { Component } from 'react';
import '../visual/simondice.css';

class SimonDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secuencia: [],
      intentoUsuario: [],
      paso: 0,
      juegoIniciado: false,
      puntaje: 0,
    };
  }

  componentDidMount() {
    // Elimina la llamada a nuevaSecuencia desde componentDidMount
    // this.nuevaSecuencia();
  }

  iluminarColor = (color) => {
    console.log(`Iluminar color: ${color}`);
    // Aquí podrías implementar la lógica para iluminar el color en tu interfaz.
    // Por simplicidad, solo lograremos el color por ahora.
  };

  mostrarSecuencia = () => {
    const { secuencia } = this.state;
    let paso = 0;

    const mostrar = setInterval(() => {
      if (paso === secuencia.length) {
        clearInterval(mostrar);
      } else {
        this.iluminarColor(secuencia[paso]);
        paso += 1;
      }
    }, 1000);
  };

  nuevaSecuencia = () => {
    const { secuencia, puntaje } = this.state;
    const nuevoColor = Math.floor(Math.random() * 4);
    this.setState(
      {
        secuencia: [...secuencia, nuevoColor],
        intentoUsuario: [],
        paso: 0,
        puntaje: puntaje + 1, // Incrementa el puntaje por cada nueva secuencia
      },
      () => {
        this.mostrarSecuencia();
      }
    );
  };

  manejarClick = (color) => {
    const { intentoUsuario, paso, secuencia } = this.state;
    this.iluminarColor(color);

    if (color === secuencia[paso]) {
      this.setState(
        {
          intentoUsuario: [...intentoUsuario, color],
          paso: paso + 1,
        },
        () => {
          if (paso + 1 === secuencia.length) {
            setTimeout(() => {
              this.nuevaSecuencia();
            }, 1000);
          }
        }
      );
    } else {
      console.log('¡Has perdido!');
      this.resetearJuego();
    }
  };

  resetearJuego = () => {
    this.setState({
      secuencia: [],
      intentoUsuario: [],
      paso: 0,
      juegoIniciado: false,
      puntaje: 0, // Reinicia el puntaje al perder
    });
  };

  iniciarJuego = () => {
    this.nuevaSecuencia();
    this.setState({ juegoIniciado: true });
  };

  render() {
    const { juegoIniciado, secuencia, puntaje } = this.state;

    return (
      <div>
        <h1>Simón dice</h1>
        <p>Puntaje: {puntaje}</p>
        {!juegoIniciado && (
          <button id="startButton" onClick={this.iniciarJuego}>
            Iniciar Juego
          </button>
        )}
        {juegoIniciado && (
          <div>
            <p>Primer color: {secuencia.length > 0 ? `Color ${secuencia[0]}` : ''}</p>
            {/* Agrega la interfaz para mostrar los colores y manejar los clics aquí */}
            <button onClick={() => this.manejarClick(0)}>Color 0</button>
            <button onClick={() => this.manejarClick(1)}>Color 1</button>
            <button onClick={() => this.manejarClick(2)}>Color 2</button>
            <button onClick={() => this.manejarClick(3)}>Color 3</button>
          </div>
        )}
      </div>
    );
  }
}

export default SimonDice;
