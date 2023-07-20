import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for custom styles

const Home = () => {
  // Sample data for ships, activities, and flights
  const ships = [
    // Sample data for ships
    // ...
  ];

  const activities = [
    // Sample data for activities
    // ...
  ];

  const flights = [
    // Sample data for flights
    // ...
  ];

  return (
    <div className="container home-page">
      <h2>Home Page</h2>

      <div className="list-container">
        <h3>List of Ships</h3>
        <ul>
          {ships.map(ship => (
            <li key={ship.id}>{ship.name} - {ship.type}</li>
          ))}
        </ul>
      </div>

      <div className="list-container">
        <h3>List of Activities</h3>
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>{activity.name} - {activity.location}</li>
          ))}
        </ul>
      </div>

      <div className="list-container">
        <h3>List of Flights</h3>
        <ul>
          {flights.map(flight => (
            <li key={flight.id}>{flight.departure} to {flight.arrival} - Duration: {flight.duration}</li>
          ))}
        </ul>
      </div>

      <footer className="footer">
        <p>Company Name - All rights reserved</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </footer>
    </div>
  );
};

export default Home;
