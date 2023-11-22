import React, { useState, useEffect } from 'react';
import '../visual/simondice.css';

function SimonDice () {
  const [secuencia, setSecuencia] = useState([]);
  const [intentoUsuario, setIntentoUsuario] = useState([]);
  const [paso, setPaso] = useState(0);
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [puntaje, setPuntaje] = useState(0);

  const iluminarColor = (color) => {
    const button = document.getElementById(`colorButton${color}`);
    if (button) {
      button.classList.add('iluminado');

      setTimeout(() => {
        button.classList.remove('iluminado');
      }, 500);
    }
  };

  const mostrarSecuencia = () => {
    secuencia.forEach((color, index) => {
      setTimeout(() => {
        iluminarColor(color);
      }, index * 1000);
    });
  };

  const nuevaSecuencia = () => {
    const nuevoColor = Math.floor(Math.random() * 4);
    setSecuencia((prevSecuencia) => [...prevSecuencia, nuevoColor]);
    setIntentoUsuario([]);
    setPaso(0);
    setPuntaje((prevPuntaje) => prevPuntaje + 1);
    mostrarSecuencia();
  };

  const manejarClick = (color) => {
    iluminarColor(color);

    if (color === secuencia[paso]) {
      setIntentoUsuario((prevIntento) => [...prevIntento, color]);
      setPaso((prevPaso) => prevPaso + 1);

      if (paso + 1 === secuencia.length) {
        setTimeout(() => {
          nuevaSecuencia();
        }, 1000);
      }
    } else {
      console.log('¡Has perdido!');
      resetearJuego();
    }
  };

  const resetearJuego = () => {
    setSecuencia([]);
    setIntentoUsuario([]);
    setPaso(0);
    setJuegoIniciado(false);
    setPuntaje(0);
  };

  const iniciarJuego = () => {
    nuevaSecuencia();
    setJuegoIniciado(true);
  };

  useEffect(() => {
    if (juegoIniciado) {
      mostrarSecuencia();
    }
  }, [secuencia, juegoIniciado]);

  return (
    <div >
      <div class="conteiner">
      <h1>Simón dice</h1>
      <p>Puntaje: {puntaje}</p>
      {!juegoIniciado && (
        <button id="startButton" onClick={iniciarJuego}>
          Iniciar Juego
        </button>
      )}
      {juegoIniciado && (
        <div>
          <p>Primer color: {secuencia.length > 0 ? `Color ${secuencia[0]}` : ''}</p>
          {[0, 1, 2, 3].map((color) => (
            <button
              key={color}
              id={`colorButton${color}`}
              onClick={() => manejarClick(color)}
            >
              Color {color}
            </button>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default SimonDice;
