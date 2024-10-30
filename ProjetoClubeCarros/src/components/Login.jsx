import React, { useState } from 'react';


const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Verifica se existe um usuário com o nome de usuário e senha fornecidos
    const userExists = pessoa.usuarios.some(
      (user) => user.usuario === username && user.senha === password
    );

    if (userExists) {
      setErrorMessage('');
      onLoginSuccess();  // Chama a função onLoginSuccess passada como prop
    } else {
      setErrorMessage('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;