import React, { useState } from 'react';

const Register = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleRegister = () => {
    // Ajoutez ici la logique pour gérer l'inscription de l'utilisateur
    console.log('Registering user...');
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="startDate">Date de départ</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Date d'arrivée</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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
