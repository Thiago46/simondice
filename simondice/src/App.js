import React, { Component } from 'react';
import './App.css';

import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Tablero from './componentes/tablero'

class App extends Component {
  render() {
    return (
      <div>
        <div className="background-svg"></div>
        <Navbar />
        <Tablero />
        <Footer />
      </div>
    );
  }
}

export default App;
