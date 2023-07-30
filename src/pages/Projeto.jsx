import React from 'react';
import data from '../data/data';

function Projeto() {
  return (
    <section className="projeto" id="projeto">
      <h1 className="title">Projetos</h1>
      {
        data.length && data.map(({titulo,
          img, descricao, repositorio, aplicacao}, index) => (
          <div key={index} className="card">
            <h1>{titulo}</h1>
            <img src={img} alt={titulo} />
            <p>{descricao}</p>
            <div className="card_links">
              <a href={repositorio}
                target="_blank" rel="noopener noreferrer">Repositorio</a>
              <a href={aplicacao}
                target="_blank" rel="noopener noreferrer">Aplicação</a>
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default Projeto;
