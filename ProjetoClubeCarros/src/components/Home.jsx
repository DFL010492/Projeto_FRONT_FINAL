import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="body text-white">
      <nav className="navbar navbar-collapse-md navbar-dark bg-black">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link text-white" href="login.html">Login</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="cadastro.html">Seja Membro</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="galeria.html">Galeria</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="reunião.html">Reuniões</a></li>
          </ul>
        </div>
      </nav>

      <header className="header">
        <div className="container">
          <h1 className="display-4 text-center py-5">Clube OverHaulinBrasilia</h1>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <h2>Entre para o Maior Clube de Brasília!</h2>
          <p>Se você é um verdadeiro entusiasta de carros, não pode deixar de conhecer o OverHaulin - o clube definitivo para os amantes de carros modificados! Aqui, a paixão pela velocidade e pelo estilo se encontram para criar uma experiência única e emocionante.</p>
          <div className="text-center py-5">
            <img src="https://get.wallhere.com/photo/monochrome-car-vehicle-Porsche-sports-car-performance-car-Sedan-wheel-supercar-black-and-white-monochrome-photography-land-vehicle-automotive-design-automotive-exterior-automobile-make-luxury-vehicle-sports-sedan-196625.jpg" className="img-fluid" alt="Carro Modificado" />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2>Sobre nosso Clube</h2>
          <p>
            Somos uma comunidade apaixonada que se reúne em torno da paixão por veículos customizados e potentes. Com sede na vibrante capital do Brasil, o clube atrai entusiastas de todas as idades e origens, unidos pelo amor aos automóveis e pela busca incessante da perfeição mecânica e estética.
          </p>
          <div className="text-center py-5">
            <img src="https://get.wallhere.com/photo/monochrome-car-vehicle-supercars-Porsche-Porsche-911-sports-car-German-cars-Convertible-wheel-supercar-black-and-white-land-vehicle-automotive-design-automotive-exterior-automobile-make-luxury-vehicle-204567.jpg" className="img-fluid" alt="Carro Modificado" />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2>Objetivo</h2>
          <p>
            O Clube OverHaulin Brasília, ao transcender as fronteiras do mero agrupamento de entusiastas de carros modificados, estabelece como seu objetivo principal a promoção da comunhão entre apaixonados pela cultura automotiva.
          </p>
        </div>
      </section>

      <section className="py-5 bg-image text-white" style={{ backgroundImage: "url(https://images.pexels.com/photos/67823/match-matches-sticks-lighter-67823.jpeg?auto=compress&cs=tinysrgb&w)", backgroundRepeat: "no-repeat", height: "95vh" }}>
        <div className="container">
          <h2>Usuários Antigos</h2>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="card mb-4 text-dark">
                <img src="https://images.pexels.com/photos/5471745/pexels-photo-5471745.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Avatar" />
                <div className="card-body">
                  <h5 className="card-title">Artamiel Antares Rock</h5>
                  <p className="card-text">Comunidade ligada em todos os tipos de Carros e com as melhores automações de Brasília nunca vi um site tão completo e feito com todo o #ROCK N ROLL!</p>
                </div>
              </div>
            </div>
            {/* Repetir estrutura de colunas para outros usuários */}
          </div>
        </div>
      </section>

      <main className="bg-image text-white">
        <section id="contact" className="container">
          <h2>Entre em Contato</h2>
          <p><i className="fa-regular fa-envelope"></i> Email - ClubeOverHaulin@gmail.com</p><br />
          <p><i className="fa-solid fa-phone"></i> Telefone - (61) 87371-189</p><br />
          <p><i className="fa-brands fa-github"></i> <a href="https://github.com/Homero34/OverHaulinBrasil">GitHub</a></p>
          <br /><br />
        </section>
      </main>

      <footer className="text-white text-center">
        <div>&copy; 2024 Clube OverHaulinBrasilia. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}



export default Home;
