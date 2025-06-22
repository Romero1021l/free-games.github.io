import React, { useState } from "react";
import "./Login.css";


function Login({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === 'Rony' && password === '1234') {
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="principal">
      <div className="login">
      <h2>Login</h2>
      <input className="input" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" type="text" />
      <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="password" />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
