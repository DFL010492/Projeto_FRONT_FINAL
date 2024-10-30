import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleLoginSuccess = () => {
    alert('Login realizado com sucesso!');
  };

  return (
    <div className="App">
      {isRegistered ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Cadastro />
      )}
      <button onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Cadastrar-se' : 'Voltar ao Login'}
      </button>
    </div>
  );
}

export default App;
