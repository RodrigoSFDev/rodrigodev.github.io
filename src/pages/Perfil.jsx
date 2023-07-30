import React from 'react';
import perfil from '../img/perfil.jpeg';

function Perfil() {
  return (
    <section className="perfil" id="perfil">
      <p>Oi, sou</p>
      <h1>Rodrigo Ferreira,</h1>
      <p>Desenvolvedor web</p>
      <section className="perfil-info">
        <section className="info-p">
          <p>Sou um programador iniciante
          apaixonado por resolver problemas e
          criar soluções criativas através do
          código. Desde que descobri a magia da programação,
          tenho me dedicado intensamente a mergulhar
          nesse universo fascinante.</p>
        </section>

        <section className="foto-perfil">
          <img src={ perfil } alt="foto perfil" />
        </section>


      </section>
    </section>
  );
}

export default Perfil;
