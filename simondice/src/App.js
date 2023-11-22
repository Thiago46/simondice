import React, { Component } from 'react';
import './App.css';

import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import SimonSay from './componentes/simonsays'

class App extends Component {
  render() {
    return (
      <div>
        <div className="background-svg"></div>
        <Navbar />
        <SimonSay/>
        <Footer />
      </div>
    );
  }
}

export default App;
