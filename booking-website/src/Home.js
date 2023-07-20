import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [vols, setVols] = useState([]);

  useEffect(() => {
    fetchVols();
  }, []);

  const fetchVols = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/API/vols');
      const volsData = response.data.map((vol) => ({
        ...vol,
        titre: `${vol.planete_depart_nom} à ${vol.planete_arrivee_nom}` // Ajouter la propriété titre
      }));
      setVols(volsData);
    } catch (error) {
      console.error('Erreur lors de la récupération des vols:', error);
    }
  };

  return (
    <div className="container home-page">
      <h2>Home Page</h2>

      <div className="list-container">
        <h3>List of Flights</h3>
        <ul>
          {vols.map((vol) => (
            <li key={vol.id}>
              <Link to={`/vol/${vol.id}`}>
                <h4>{vol.titre}</h4>
              </Link>
              <p>Flight Date: {vol.date_vol}</p>
              <p>Flight Duration: {vol.duree_vol} hours</p>
            </li>
          ))}
        </ul>
      </div>

      <footer className="footer">
        <p>Company Name - All rights reserved</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
      </footer>
    </div>
  );
};

export default Home;
