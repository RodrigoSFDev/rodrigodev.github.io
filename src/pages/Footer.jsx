import React from 'react';
import linkedin from '../assets/Linkedin.png';
import github from '../assets/Github.png';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <h1 className="title">Contatos</h1>
      <section>
        <a href='https://www.linkedin.com/in/rodrigo-sferreira/' target='_blank' rel="noreferrer">
          <img src={ linkedin }/>
        </a>
        <a href='https://github.com/RodrigoSFDev' target='_blank' rel="noreferrer">
          <img src={ github }/>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
