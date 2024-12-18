import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import MeuCarro from './components/MeuCarro';
import Galeria from './components/Galeria';

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleLoginSuccess = () => {
    alert('Login realizado com sucesso!');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isRegistered ? (
                <Login onLoginSuccess={handleLoginSuccess} onToggleRegister={() => setIsRegistered(false)} />
              ) : (
                <Cadastro onToggleRegister={() => setIsRegistered(true)} />
              )}/>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/meucarro" element={<MeuCarro />}></Route>
          <Route path="/galeria" element={<Galeria />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;