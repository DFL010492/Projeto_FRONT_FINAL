import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import MeuCarro from './components/MeuCarro';
import Galeria from './components/Galeria';

function App() {
  // Estado para verificar se o usuário está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Usuário autenticado
    alert('Login realizado com sucesso!');
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Deslogar o usuário
    alert('Logout realizado com sucesso!');
  };

  // Componente de Rota Protegida
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página inicial (Login ou Cadastro) */}
          <Route
            path="/"
            element={
              isRegistered ? (
                <Login
                  onLoginSuccess={handleLoginSuccess}
                  onToggleRegister={() => setIsRegistered(false)}
                />
              ) : (
                <Cadastro onToggleRegister={() => setIsRegistered(true)} />
              )
            }
          />

          {/* Páginas protegidas */}
          <Route
            path="/home"
            element={<ProtectedRoute element={<Home />} />}
          />
          <Route
            path="/meucarro"
            element={<ProtectedRoute element={<MeuCarro />} />}
          />
          <Route
            path="/galeria"
            element={<ProtectedRoute element={<Galeria />} />}
          />
        </Routes>

        {/* Botão de Logout */}
        {isAuthenticated && (
          <button onClick={handleLogout} style={{ marginTop: '20px' }}>
            Sair
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
