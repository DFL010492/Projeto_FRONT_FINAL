import React, { useState, useEffect } from 'react';
import './MeuCarro.css';
import Menu from './Menu';

function MeuCarro() {
  const [carro, setCarro] = useState(localStorage.getItem('carro') || '');
  const [ano, setAno] = useState(localStorage.getItem('ano') || '');
  const [descricao, setDescricao] = useState(localStorage.getItem('descricao') || '');
  const [imagens, setImagens] = useState(JSON.parse(localStorage.getItem('imagens')) || []);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      localStorage.setItem('carro', carro);
      localStorage.setItem('ano', ano);
      localStorage.setItem('descricao', descricao);
      localStorage.setItem('imagens', JSON.stringify(imagens));
    }
  }, [submitted, carro, ano, descricao, imagens]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleImageUpload = (e) => { 
    const files = Array.from(e.target.files);
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        newImages.push(reader.result);
        setImagens((prevImages) => [...prevImages, ...newImages]);
      };
      reader.readAsDataURL(file);
    });
  };
 
  const handleReset = () => {
    setCarro('');
    setAno('');
    setDescricao('');
    setImagens([]);
    setSubmitted(false);

    localStorage.removeItem('carro');
    localStorage.removeItem('ano');
    localStorage.removeItem('descricao');
    localStorage.removeItem('imagens');
  };

  return (
    <>
      <Menu />
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
          <label>
            Imagens do carro:
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
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
            <div>
              <strong>Imagens:</strong>
              {imagens.map((img, index) => (
                <img key={index} src={img} alt={`Carro ${index}`} style={{ width: '100px', margin: '10px' }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MeuCarro;
