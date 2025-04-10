import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Car Rentals</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/about us">About Us</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
