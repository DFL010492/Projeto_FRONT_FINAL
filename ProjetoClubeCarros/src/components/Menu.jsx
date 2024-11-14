import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Menu() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <header className="menu-header">
      <nav className="navbar">
        <button onClick={toggleMenu} className="menu-button">
          Menu
        </button>
        {isMenuVisible && (
          <div className="menu-options">
            <Link to="/home">Home</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/meucarro">Meu Carro</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Menu;
