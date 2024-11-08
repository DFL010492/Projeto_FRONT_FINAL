import React, { useState } from 'react';
import { pessoa } from './BancoCadastro';

const Cadastro = ({ onToggleRegister }) => {
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

    const storedUsers = JSON.parse(localStorage.getItem('usuarios')) || [];
    const allUsers = [...pessoa.usuarios, ...storedUsers]; 

    const userExists = allUsers.some(
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

    const updatedUsers = [...storedUsers, newUser];
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
    <div className="container">
      <div className="inicio">
        <h2>Cadastro</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="input"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="input"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            type="password"
            className="input"
            placeholder="Confirme a Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          <button type="submit" className="start-button">Cadastrar</button>
        </form>
        <button onClick={onToggleRegister} className="back-button">
          Voltar para o Login
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
