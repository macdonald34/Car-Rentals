import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Our Products</h4>
                        <ul>
                            <li><a href="#/">About RentalX</a></li>
                            <li><a href="#/">Careers</a></li>
                            <li><a href="#/">Press</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#/">Download</a></li>
                            <li><a href="#/">Guides</a></li>
                            <li><a href="#/">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Extras</h4>
                        <ul>
                            <li><a href="#/">Special Deals</a></li>
                            <li><a href="#/">FAQ</a></li>
                            <li><a href="#/">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter for exclusive deals</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Your email" />
                            <button className="btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 RentalX. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#/">Facebook</a>
                        <a href="#/">Twitter</a>
                        <a href="#/">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;