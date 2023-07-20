import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const reservationId = searchParams.get('reservationId');

  const handlePayment = (paymentMethod) => {
    // Ajoutez ici la logique pour effectuer le paiement avec la méthode choisie (paymentMethod) pour la réservation spécifique (reservationId)
    console.log('Paiement effectué avec :', paymentMethod);
  };

  return (
    <div>
      <h2>Page de Paiement</h2>
      <p>Réservation ID : {reservationId}</p>
      <h3>Choisissez votre méthode de paiement :</h3>
      <button className="btn btn-primary" onClick={() => handlePayment('Visa')}>
        Visa
      </button>
      <button className="btn btn-primary" onClick={() => handlePayment('Mastercard')}>
        Mastercard
      </button>
      <button className="btn btn-primary" onClick={() => handlePayment('Amex')}>
        Amex
      </button>
      <button className="btn btn-primary" onClick={() => handlePayment('Bitcoin')}>
        Bitcoin
      </button>
    </div>
  );
};

export default PaymentPage;
