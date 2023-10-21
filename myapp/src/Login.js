import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({setAuthenticated}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleEmailChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000', {username,password});
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token)
      if(localStorage.getItem('token') !== null){
        setAuthenticated(true)
      }else{
        setAuthenticated(false)
      }
      
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" value={username} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
