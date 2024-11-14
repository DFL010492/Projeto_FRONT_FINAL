import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pessoa } from './BancoCadastro';

const Login = ({ onLoginSuccess, onToggleRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('usuarios')) || [];
    const allUsers = [...pessoa.usuarios, ...storedUsers]; // Combina os usuários

    const userExists = allUsers.some(
      (user) => user.usuario === username && user.senha === password
    );

    if (userExists) {
      setErrorMessage('');
      onLoginSuccess();
      navigate('/Home');
    } else {
      setErrorMessage('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="container">
      <div className="inicio">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="input"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit" className="start-button">Entrar</button>
        </form>
        <button onClick={onToggleRegister} className="register-button">
          Cadastrar-se
        </button>
      </div>
    </div>
  );
};

export default Login;
