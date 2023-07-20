import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    address: '',
    phoneNumberEarth: '',
    phoneNumberGalactic: '',
    weightEarth: '',
    weightSpace: '',
    reservationNumber: '',
    spaceshipCode: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer le formulaire
    console.log(formData);
    // Réinitialiser le formulaire
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      address: '',
      phoneNumberEarth: '',
      phoneNumberGalactic: '',
      weightEarth: '',
      weightSpace: '',
      reservationNumber: '',
      spaceshipCode: '',
      message: '',
    });
  };

  const handleAbandon = () => {
    // Réinitialiser le formulaire
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      address: '',
      phoneNumberEarth: '',
      phoneNumberGalactic: '',
      weightEarth: '',
      weightSpace: '',
      reservationNumber: '',
      spaceshipCode: '',
      message: '',
    });
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Prénom</label>
          <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date de naissance</label>
          <input type="date" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Adresse</label>
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Numéro Terrestre</label>
          <input type="tel" className="form-control" name="phoneNumberEarth" value={formData.phoneNumberEarth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Numéro Galactique</label>
          <input type="tel" className="form-control" name="phoneNumberGalactic" value={formData.phoneNumberGalactic} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Poids Terrestre</label>
          <input type="number" className="form-control" name="weightEarth" value={formData.weightEarth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Poids Espace</label>
          <input type="number" className="form-control" name="weightSpace" value={formData.weightSpace} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Numéro de réservation</label>
          <input type="text" className="form-control" name="reservationNumber" value={formData.reservationNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Code vaisseau</label>
          <input type="text" className="form-control" name="spaceshipCode" value={formData.spaceshipCode} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Envoyer</button>
          <button type="button" className="btn btn-primary" onClick={handleAbandon}>Abandonner</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
