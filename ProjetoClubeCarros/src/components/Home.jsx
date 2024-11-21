import React, { useState } from 'react';
import './Home.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

function UserCard({ image, name, text }) {
  return (
    <div>
      <div>
        <img src={image}/>
        <div>
          <h5>{name}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <main>
      <section>
        <h2>Entre em Contato</h2>
        <p><i></i> Email - ClubeOverHaulin@gmail.com</p>
        <p><i></i> Telefone - (61) 87371-189</p>
        <p><i></i> <a href="https://github.com/DFL010492/Projeto_FRONT_FINAL">GitHub</a></p>
      </section>
      <footer className="footer">
        <div>&copy; 2024 Clube OverHaulinBrasilia. Todos os direitos reservados.</div>
      </footer>
    </main>
  );
}

function Home() {
  return (
    <>
      <div>
        <Menu />
        <div className="Title">
          <h1 className="Move">Clube OverHaulinBrasilia</h1>
          <div className="Animation">
            <img src="/src/assets/Carro.png" alt="Carro" />
          </div>
        </div>
        <h2>Entre para o Maior Clube de Brasília!</h2>
        <p>
        &emsp;Se você é um verdadeiro entusiasta de carros, 
        não pode deixar de conhecer o OverHaulin - 
        o clube definitivo para os amantes de carros modificados! Aqui, 
        a paixão pela velocidade e pelo estilo se encontram para criar uma experiência única e emocionante.
        </p>
      </div>
      <div className='informaçoes'>
        <h2>Sobre nosso Clube</h2>
        <p>
        &emsp;Somos uma comunidade apaixonada que se reúne em torno da paixão por veículos customizados e potentes. 
        Com sede na vibrante capital do Brasil, o clube atrai entusiastas de todas as idades e origens, 
        unidos pelo amor aos automóveis e pela busca incessante da perfeição mecânica e estética.
        </p>
        <p>
        &emsp;Cada encontro do Overhaulin Brasília é uma celebração da engenhosidade e da criatividade, 
        onde os membros compartilham ideias, técnicas e histórias de suas próprias transformações. 
        Dos clássicos reinventados aos modelos modernos radicalmente alterados, 
        cada carro exibe o orgulho e o trabalho árduo de seus proprietários.
        </p>
        <p>
        &emsp;Além de ser um espaço para exibir suas criações, o clube também promove eventos beneficentes e colabora com a comunidade local, 
        demonstrando que sua paixão vai além do asfalto. O Overhaulin Brasília é verdadeiramente um símbolo de camaradagem, 
        inovação e paixão pela cultura automotiva.
        </p>
      </div>
      <div className='objetivos'>
        <h2>Objetivos</h2>
        <p>
        &emsp;O Clube OverHaulin Brasília, ao transcender as fronteiras do mero agrupamento de entusiastas de carros modificados, 
        estabelece como seu objetivo principal a promoção da comunhão entre apaixonados pela cultura automotiva. 
        Mais do que apenas celebrar veículos customizados e potentes, o clube se propõe a ser um catalisador de inovação, 
        camaradagem e impacto positivo na comunidade.
        </p>
        <p>
        &emsp;Em sua essência, o objetivo central do OverHaulin Brasília é criar um ambiente propício para a troca de ideias,
        técnicas e histórias entre seus membros, fomentando a criatividade e a busca incessante pela perfeição mecânica e estética. 
        Cada encontro do clube se transforma em uma festa de engenhosidade, onde os participantes compartilham não apenas suas realizações automotivas, 
        mas também os desafios superados durante o processo de transformação de seus veículos.
        </p>
        <p>
        &emsp;Além de ser uma vitrine para exibir as criações individuais, o clube direciona sua paixão para além do asfalto, 
        assumindo um compromisso sólido com a responsabilidade social. Através de eventos beneficentes e colaborações com a comunidade local, 
        o OverHaulin Brasília procura retribuir, demonstrando que a paixão pelos automóveis pode ser um poderoso meio de impacto positivo na sociedade.
        </p>
        <p>
        &emsp;Assim, o Clube OverHaulin Brasília emerge como um símbolo multifacetado: não apenas como um espaço de expressão para entusiastas automotivos, 
        mas também como uma força impulsionadora de inovação, solidariedade e paixão que transcende as fronteiras do universo automotivo.
        </p>
      </div>
      <section>
        <h2>Usuários Antigos</h2>
        <div className="container">
          <div className="row">
            <UserCard
              image="https://images.pexels.com/photos/5471745/pexels-photo-5471745.jpeg?auto=compress&cs=tinysrgb&w=1200"
              name="Artamiel Antares Rock"
              text="Comunidade ligada em todos os tipos de Carros e com as melhores automações de Brasília nunca vi um site tão completo e feito com todo o #ROCK N ROLL!"
            />
            <UserCard
              image="https://images.pexels.com/photos/8986105/pexels-photo-8986105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              name="Dudu Duramento Durales"
              text="Uma gama de oportunidades de automações que podem ter nesse lugar já consegui empregar todos os meus filhos nesses novos Projetos #MecanicaPorAmor!"
            />
            <UserCard
              image="https://images.pexels.com/photos/4489714/pexels-photo-4489714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              name="Manoel Maonaroda Nogueira"
              text="UM XOQUE DE MAQUINAS MORTIFERAS nunca tinha vista tanto carinho de uma comunidade tao GRANDE meu primo Dudu trabalhou na primeira Amostra e desde então NAO PERCO UMA #FUSQUINHAELETRICO"
            />
            <UserCard
              image="https://images.pexels.com/photos/4489762/pexels-photo-4489762.jpeg?auto=compress&cs=tinysrgb&w=1200"
              name="Arthur Bigode Silva"
              text="Eu e meu bigode adoramos o clube! Sempre pego meu Ford Mustang e compareço às amostras anuais acompanhado pela minha filha Bigorndina Silva! #BigodesTunados"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;