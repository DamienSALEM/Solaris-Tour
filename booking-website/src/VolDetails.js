import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './VolDetails.css';

const VolDetails = () => {
  const { id } = useParams();
  const [vol, setVol] = useState(null);

  useEffect(() => {
    fetchVolDetails();
  }, [id]);

  const fetchVolDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/API/details-vol/${id}`);
      setVol(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du vol:', error);
    }
  };
  const handleReservation = async () => {
    try {
      const userId = '123'; // Replace with the actual user ID
      const response = await axios.post(`http://127.0.0.1:8000/API/reservation/${id}`, {
        user_id: userId,
      });
      console.log('Reservation successful:', response.data);
      // Add any additional logic or notifications for successful reservation
    } catch (error) {
      console.error('Error occurred during reservation:', error);
      // Add error handling or notifications for failed reservation
    }
  };
  

  if (!vol) {
    return <div className="loading">Chargement des détails du vol...</div>;
  }

  const { type_vaisseau_nom, planete_arrivee_nom, planete_depart_nom, date_vol, duree_vol } = vol;

  return (
    <div className="container vol-details">
      <h2>Flight Details</h2>
      <div className="details-container">
        <div>
          <h3>Departure Planet</h3>
          <p>{planete_depart_nom}</p>
        </div>
        <div>
          <h3>Arrival Planet</h3>
          <p>{planete_arrivee_nom}</p>
        </div>
        <div>
          <h3>Spacecraft Name</h3>
          <p>{type_vaisseau_nom}</p>
        </div>
        <div>
          <h3>Flight Date</h3>
          <p>{date_vol}</p>
        </div>
        <div>
          <h3>Flight Duration</h3>
          <p>{duree_vol} hours</p>
        </div>
      </div>
      <button className="details-container" onClick={handleReservation}>
        Reserve
      </button>
    </div>
  );
};

export default VolDetails;
