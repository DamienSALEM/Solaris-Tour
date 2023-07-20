import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Contact from './Contact';
import Home from './Home';
import Reservation from './Reservation';
import PaymentPage from './PaymentPage';


const App = () => {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url('/path/to/your/image.jpg')`, // Replace '/path/to/your/image.jpg' with the actual path to your image
          backgroundSize: 'cover',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reservation" className="nav-link">
                  Reservation
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/payment" component={PaymentPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
