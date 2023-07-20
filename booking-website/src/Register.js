import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // URL de l'API pour l'inscription de l'utilisateur
    const apiUrl = 'https://example.com/api/register/';

    // Corps de la requête
    const data = {
      username: username,
      email: email,
      password: password,
    };

    // Effectuer une requête POST à l'API
    axios
      .post(apiUrl, data)
      .then((response) => {
        // Gérer l'inscription réussie
        console.log('Inscription réussie !');
        console.log(response.data); // Données de réponse de l'API (si disponibles)
      })
      .catch((error) => {
        // Gérer l'erreur d'inscription
        console.error('Échec de l\'inscription !');
        console.error(error); // Objet d'erreur renvoyé par l'API (le cas échéant)
      });
  };

  return (
    <div>
      <h2>Page d'Inscription</h2>
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
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Entrez votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="button" className="btn btn-primary" onClick={handleRegister}>
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
