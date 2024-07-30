// src/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (team) => {
    if (team === 'compliance') {
      navigate('/compliance-dashboard');
    } else if (team === 'finance') {
      navigate('/finance-dashboard');
    } else if (team === 'media') {
      navigate('/media-dashboard');
    } else if (team === 'account') {
      navigate('/account-dashboard');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <button onClick={() => handleLogin('account')}>Login as Account Team</button>
        <button onClick={() => handleLogin('finance')}>Login as Finance Team</button>
        <button onClick={() => handleLogin('compliance')}>Login as Compliance Team</button>
        <button onClick={() => handleLogin('media')}>Login as Media Team</button>
      </div>
    </div>
  );
};

export default Login;
