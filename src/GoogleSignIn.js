import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import './GoogleSignIn.css';
import logo from './google.webp'; // Ajusta el path a tu imagen

const GoogleSignIn = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      navigate('/login');
    },
    onError: () => {
      console.log('Login Failed');
      navigate('/login');
    },
  });

  useEffect(() => {
    login();
    setTimeout(() => {
      navigate('/login');
    }, 4000);
  }, [login, navigate]);

  return (
    <div className="google-signin-container">
      <img src={logo} alt="Logo" className="centered-image" />
      <button onClick={() => login()}>Sign in with Google</button>
    </div>
  );
};

export default GoogleSignIn;
