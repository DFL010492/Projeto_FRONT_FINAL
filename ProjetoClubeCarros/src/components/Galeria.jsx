import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import './Home.css';

function Galeria() {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('imagens')) || [];
    setImagens(savedImages);
  }, []);

  return (
    <>
      <Menu />
      <div className="galeria-container">
        <h2>Galeria de Imagens</h2>
        {imagens.length > 0 ? (
          <div className="galeria-imagens">
            {imagens.map((img, index) => (
              <img key={index} src={img} alt={`Imagem ${index}`} style={{ width: '150px', margin: '10px' }} />
            ))}
          </div>
        ) : (
          <p>Nenhuma imagem enviada ainda.</p>
        )}
      </div>
    </>
  );
}

export default Galeria;
