import React from 'react';
import Perfil from './pages/Perfil';
import Projeto from './pages/Projeto';
import Skills from './pages/Skills';
import Footer from './pages/Footer';

import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <main className="main">
      <Navbar />
      <Perfil />
      <Skills />
      <Projeto />
      <Footer />
    </main>

  );
}

export default App;
