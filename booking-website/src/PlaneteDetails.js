import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PlaneteDetails() {
  const {id} = useParams();
  const [planeteDetails, setPlaneteDetails] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchPlaneteDetails();
  }, [id]);

  const fetchPlaneteDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/API/details-planete/${id}`, {
        headers: {
          Authorization: `Token ${token}`, // Ajouter l'en-tête d'autorisation
        },
      });
      console.log(response.data);
      setPlaneteDetails(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de la planète:', error);
    }
  };

  if (!planeteDetails) {
    return <div>Chargement des détails de la planète...</div>;
  }

  const { planete, vols, hotels, activites } = planeteDetails;

  return (
    <div>
      <h1>Détails de la planète {planete.nom}</h1>
      <h2>Vols prévus :</h2>
      <ul>
        {vols.map((vol) => (
          <li key={vol.id}>
            <p>Planète de départ : {vol.planete_depart_nom}</p>
            <p>Type de vaisseau : {vol.type_vaisseau_nom}</p>
            <p>Date du vol : {vol.date_vol}</p>
          </li>
        ))}
      </ul>
      <h2>Hôtels :</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <p>Nom : {hotel.nom}</p>
            <p>Adresse : {hotel.adresse}</p>
          </li>
        ))}
      </ul>
      <h2>Activités :</h2>
      <ul>
        {activites.map((activite) => (
          <li key={activite.id}>
            <p>Nom : {activite.nom}</p>
            <p>Description : {activite.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaneteDetails;
