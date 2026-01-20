import React from 'react';
import './Header.css';

const Header = ({ setCurrentPage }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo" onClick={() => setCurrentPage('home')}>
                        <span className="logo-icon">🚗</span>
                        <span className="logo-text">RentalX</span>
                    </div>
                    <nav className="nav-menu">
                        <a onClick={() => setCurrentPage('home')} href="#home">Home</a>
                        <a onClick={() => setCurrentPage('cars')} href="#cars">Cars</a>
                        <a href="#deals">Deals</a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <div className="auth-buttons">
                        <button className="btn-signin" onClick={() => setCurrentPage('signin')}>Sign In</button>
                        <button className="btn-signup" onClick={() => setCurrentPage('signup')}>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;