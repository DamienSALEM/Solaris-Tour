import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    // Add login logic here
    console.log('Logging in...');
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div>
      <h2>Login Page</h2>
      {showRegister ? (
        <div>
          <Register />
          <button className="btn btn-link" onClick={toggleRegister}>
            Back to Login
          </button>
        </div>
      ) : (
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
            <button type="button" className="btn btn-primary" onClick={toggleRegister}>
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
