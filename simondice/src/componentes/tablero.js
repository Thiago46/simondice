import React, { useState } from 'react';
import '../visual/tablero.css';

function Conteiner() {
  const [encendidos, setEncendidos] = useState([false, false, false, false]);

  const handleToggle = (index) => {
    const nuevosEncendidos = [...encendidos];
    nuevosEncendidos[index] = !nuevosEncendidos[index];
    setEncendidos(nuevosEncendidos);
  };

  return (
    <div className="botonera">
      <button
        className={`div1 ${encendidos[0] ? 'encendido' : ''}`}
        onClick={() => handleToggle(0)}
      ></button>
      <button
        className={`div2 ${encendidos[1] ? 'encendido' : ''}`}
        onClick={() => handleToggle(1)}
      ></button>
      <button
        className={`div3 ${encendidos[2] ? 'encendido' : ''}`}
        onClick={() => handleToggle(2)}
      ></button>
      <button
        className={`div4 ${encendidos[3] ? 'encendido' : ''}`}
        onClick={() => handleToggle(3)}
      ></button>
    </div>
  );
}

export default Conteiner;
