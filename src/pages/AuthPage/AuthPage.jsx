import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1 className="Title">Welcome to Films&Flix</h1>
      <div className="AuthPage">
      <div>
      <h3 onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</h3>
      </div>
      <div className="Form">
      { showSignUp ?
      <SignUpForm setUser={setUser} />
        :
      <LoginForm setUser={setUser} />
      }
      </div>
      </div>
    </main>
  );
}