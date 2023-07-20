import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlanetesList() {
  const [planetes, setPlanetes] = useState([]);

  useEffect(() => {
    fetchPlanetes();
  }, []);

  const fetchPlanetes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/API/planetes');
      setPlanetes(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des planètes:', error);
    }
  };

  return (
    <div>
      <h1>Liste des planètes</h1>
      <div className="planetes-container">
        {planetes.map(planete => (
          <div key={planete.id} className="card">
            <Link to={`/planete-details/${planete.id}`}>
              <h2>{planete.nom}</h2>
            </Link>
            <p>Description: {planete.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanetesList;
