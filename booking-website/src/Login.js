import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    // URL de l'API pour la connexion de l'utilisateur
    const apiUrl = 'https://example.com/api/login/';

    // Corps de la requête
    const data = {
      username: username,
      password: password,
    };

    // Effectuer une requête POST à l'API
    axios
      .post(apiUrl, data)
      .then((response) => {
        // Gérer la connexion réussie
        console.log('Connexion réussie !');
        console.log(response.data); // Données de réponse de l'API (si disponibles)
      })
      .catch((error) => {
        // Gérer l'erreur de connexion
        console.error('Échec de la connexion !');
        console.error(error); // Objet d'erreur renvoyé par l'API (le cas échéant)
      });
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div>
      <h2>Page de Connexion</h2>
      {showRegister ? (
        <div>
          <Register />
          <button className="btn btn-link" onClick={toggleRegister}>
            Retour à la Connexion
          </button>
        </div>
      ) : (
        <form>
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Entrez votre nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Se Connecter
            </button>
            <button className="btn btn-primary" onClick={toggleRegister}>
              S'inscrire
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
