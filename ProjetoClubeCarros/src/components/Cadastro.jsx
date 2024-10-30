import React, { useState } from 'react';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !username || !password || !confirmPassword || !email) {
      setErrorMessage('Todos os campos são obrigatórios');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('usuarios')) || [];

    const userExists = existingUsers.some(
      (user) => user.usuario === username || user.email === email
    );

    if (userExists) {
      setErrorMessage('Nome de usuário ou email já cadastrado');
      return;
    }

    const newUser = { 
      nome: name,
      usuario: username,
      senha: password,
      email: email,
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('usuarios', JSON.stringify(updatedUsers));

    setSuccessMessage('Cadastro realizado com sucesso!');
    setErrorMessage('');
    setName('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label>Confirme a Senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
