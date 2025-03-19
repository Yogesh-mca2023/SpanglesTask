import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <div className="background-design">
        <div className="auth-switch">
          <div className={`switch-slider ${!isLogin ? 'register' : ''}`}></div>
          <button 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <div className="form-wrapper">
          {isLogin ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}

export default App;
