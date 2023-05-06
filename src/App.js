import React, { Component } from 'react';
import './App.css';
import  Perfil  from './pages/Perfil';
import Projeto from './pages/Projeto';

class App extends Component {
  render() {
    return (
      <main className="main">
      <Perfil />
      <Projeto />
      </main>
    )
  }
}

export default App;