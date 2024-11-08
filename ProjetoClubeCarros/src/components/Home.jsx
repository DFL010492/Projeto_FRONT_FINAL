import React from 'react';
import './Home.css';
import Carro from '/src/assets/Carro.png'

function Home() {
  return (
    <>
    <div className="body text-white">
      

      <header className="header">
        <div className="container">
          <h1>Clube OverHaulinBrasilia</h1>
          <img src={ Carro } alt="Carro Logo" />
        </div>
      </header>

      <body>
      <main className="bg-image text-white">
        <section id="contact" className="container">
          <h2>Entre em Contato</h2>
          <p><i className="fa-regular fa-envelope"></i> Email - ClubeOverHaulin@gmail.com</p><br />
          <p><i className="fa-solid fa-phone"></i> Telefone - (61) 87371-189</p><br />
          <p><i className="fa-brands fa-github"></i> <a href="https://github.com/Homero34/OverHaulinBrasil">GitHub</a></p>
          <br /><br />
        </section>
      </main>
      </body>

      <footer className="text-white text-center">
        <div>&copy; 2024 Clube OverHaulinBrasilia. Todos os direitos reservados.</div>
      </footer>
    </div>
    </>
  );
  
}



export default Home;