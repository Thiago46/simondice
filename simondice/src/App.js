import React, { Component } from 'react';
import './App.css';

import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Conteiner from './componentes/conteiner'

class App extends Component {
  render() {
    return (
      <div>
        <div className="background-svg"></div>
        <Navbar />
        <Conteiner />
        <Footer />
      </div>
    );
  }
}

export default App;
