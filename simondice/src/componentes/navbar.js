import React from 'react';
import '../visual/navbar.css'

function navbar(){
  return (
    <nav>
      <div className="izquierda">
        <span className="logo">Logo</span>
        <span className="name">Nombre</span>
      </div>
      <ul>
        <li>Inicio</li>
        <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default navbar;

