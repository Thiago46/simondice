import React from 'react';
import '../visual/navbar.css'

function navbar() {
  return (
    <nav>
      <div className="izquierda">
        <span className="logo">Logo</span>
        <span className="name">Nombre</span>
      </div>
      <ul>
        <li>Inicio</li>
        <li><a href="">Sobre nosotros</a></li>
        <li><a href="">Servicios</a></li>
        <li><a href="">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default navbar;

