import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Contact from './Contact';
import Home from './Home';
import PaymentPage from './PaymentPage';
import ListePlanete from './ListePlanete';
import PlaneteDetails from './PlaneteDetails';
import VolDetails from './VolDetails';
import Register from './Register';



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
                <Link to="/inscription" className="nav-link">
                  inscription
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
              <li className="nav-item">
                <Link to="/liste" className="nav-link">
                  Liste planetes
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/payment" component={PaymentPage} />
          <Route path="/liste" element={<ListePlanete />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/planete-details/:id" element={<PlaneteDetails />} />
          <Route path="/vol/:id" element={<VolDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
