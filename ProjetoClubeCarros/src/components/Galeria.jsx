import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import './Home.css'; // Import do CSS separado

function Galeria() {
  const [imagens, setImagens] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', position: { x: 0, y: 0 } });

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('imagens')) || [];
    setImagens(savedImages);
  }, []);

  const handleMouseEnter = (e, index) => {
    const carro = localStorage.getItem('carro') || 'Carro não registrado';
    const ano = localStorage.getItem('ano') || 'Ano não registrado';
    const descricao = localStorage.getItem('descricao') || 'Descrição não registrada';

    const content = `
      Carro: ${carro} 
      Ano: ${ano} 
      Descrição: ${descricao}
    `;

    const position = { x: e.clientX + 10, y: e.clientY + 10 };

    setTooltip({ visible: true, content, position });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: '', position: { x: 0, y: 0 } });
  };

  return (
    <>
      <Menu />
      <div className="galeria-container">
        <h2>Galeria de Imagens</h2>
        {imagens.length > 0 ? (
          <div className="galeria-imagens">
            {imagens.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagem ${index}`}
                className="galeria-imagem"
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        ) : (
          <p>Nenhuma imagem enviada ainda.</p>
        )}
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{
              top: tooltip.position.y,
              left: tooltip.position.x,
            }}
          >
            {tooltip.content}
          </div>
        )}
      </div>
    </>
  );
}

export default Galeria;
