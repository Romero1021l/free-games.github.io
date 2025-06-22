import React, { useState } from 'react';
import Login from './Login';
import App from './App';
import Library from './Library';
import Tutorial from './Tutorial';
import Info from "./Info";

function Main() {
  const [vista, setVista] = useState('login');

  const handleLoginSuccess = () => {
    setVista('app');
  };

  return (
    <>
      {vista === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}
      {vista === 'app' && <App cambiarVista={setVista} />}
      {vista === 'library' && <Library volver={() => setVista('app')} />}
      {vista === 'tutorial' && <Tutorial volver={() => setVista('app')} />}
        {vista === 'info' && <Info volver={() => setVista('app')} />}
    </>
  );
}

export default Main;
