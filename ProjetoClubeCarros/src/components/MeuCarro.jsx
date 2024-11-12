import React, { useState, useEffect } from 'react';
import './MeuCarro.css';

function MeuCarro() {
  // Inicialize o estado com os dados do localStorage, se existirem
  const [carro, setCarro] = useState(localStorage.getItem('carro') || '');
  const [ano, setAno] = useState(localStorage.getItem('ano') || '');
  const [descricao, setDescricao] = useState(localStorage.getItem('descricao') || '');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Se os dados foram enviados, salve-os no localStorage
    if (submitted) {
      localStorage.setItem('carro', carro);
      localStorage.setItem('ano', ano);
      localStorage.setItem('descricao', descricao);
    }
  }, [submitted, carro, ano, descricao]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setCarro('');
    setAno('');
    setDescricao('');
    setSubmitted(false);

    // Limpar o localStorage ao resetar o formulário
    localStorage.removeItem('carro');
    localStorage.removeItem('ano');
    localStorage.removeItem('descricao');
  };

  return (
    <div className="meus-carros-container">
      <h2>Descreva seu Carro</h2>
      <form onSubmit={handleSubmit} className="carro-form">
        <label>
          Carro:
          <input
            type="text"
            value={carro}
            onChange={(e) => setCarro(e.target.value)}
            required
          />
        </label>
        <label>
          Ano:
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </label>
        <label>
          Descrição:
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleReset}>Limpar</button>
      </form>
      {submitted && (
        <div className="confirmation-message">
          <h3>Carro enviado com sucesso!</h3>
          <p><strong>Carro:</strong> {carro}</p>
          <p><strong>Ano:</strong> {ano}</p>
          <p><strong>Descrição:</strong> {descricao}</p>
        </div>
      )}
    </div>
  );
}

export default MeuCarro;
