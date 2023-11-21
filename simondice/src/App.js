import React, { Component } from 'react';
import './App.css';

import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import SimonDice from './componentes/simondice';

class App extends Component {
  render() {
    return (
      <div>
        <div className="background-svg"></div>
        <Navbar />
        <SimonDice />
        <Footer />
      </div>
    );
  }
}

export default App;
