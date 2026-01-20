import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ cars, setCurrentPage }) => {
    const [selectedCategory, setSelectedCategory] = useState('All Cars');

    const filteredCars = selectedCategory === 'All Cars' 
        ? cars 
        : cars.filter(car => car.category === selectedCategory);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Premium Car Rentals at Unbeatable Prices</h1>
                            <p>Explore our wide range of premium vehicles. Choose from sedans, SUVs, and luxury cars for your next adventure.</p>
                            <div className="hero-buttons">
                                <button className="btn-app" onClick={() => setCurrentPage('cars')}>🚗 Browse Vehicles</button>
                                <button className="btn-app">📞 Call Us Now</button>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop" alt="Featured Car" className="hero-car-img" />
                        </div>
                    </div>
                    <div className="search-box">
                        <div className="search-item">
                            <label>📍 Select a Location</label>
                            <input type="text" placeholder="Your city" />
                        </div>
                        <div className="search-item">
                            <label>📅 Pick-up date</label>
                            <input type="date" />
                        </div>
                        <div className="search-item">
                            <label>📍 Return date</label>
                            <input type="date" />
                        </div>
                        <button className="search-button">Search</button>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="brands">
                <div className="container">
                    <div className="brands-list">
                        <span>Hertz</span>
                        <span>Eurocar</span>
                        <span>National</span>
                        <span>Thrifty</span>
                        <span>AVIS</span>
                        <span>CarRentals.com</span>
                    </div>
                </div>
            </section>

            {/* 3 Steps Section */}
            <section className="steps">
                <div className="container">
                    <h2 className="section-title">Rentgo following 3 working steps</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-icon">📍</div>
                            <h3>Choose a location</h3>
                            <p>Pickup the car from your nearest branch or let us arrange a free home delivery</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">📅</div>
                            <h3>Pick-up date</h3>
                            <p>Select your pick-up and drop-off dates for booking the right car</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">🚗</div>
                            <h3>Book your car</h3>
                            <p>Book your desired car and we'll deliver it right to your doorstep</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Services Section */}
            <section className="best-services">
                <div className="container">
                    <h2 className="section-title">Feel the best experience with our rental deals</h2>
                    <div className="services-content">
                        <div className="car-showcase">
                            <img src="https://images.unsplash.com/photo-1606611013016-969c19d24e6f?w=500&h=400&fit=crop" alt="Showcase Car" className="showcase-car-img" />
                        </div>
                        <div className="services-list">
                            <div className="service-item">
                                <span className="service-icon">✓</span>
                                <div>
                                    <h4>Deals for every budget</h4>
                                    <p>Find the perfect car within your budget and enjoy a smooth rental experience</p>
                                </div>
                            </div>
                            <div className="service-item">
                                <span className="service-icon">✓</span>
                                <div>
                                    <h4>Free cancellation</h4>
                                    <p>Free cancellation up to 48 hours before pickup</p>
                                </div>
                            </div>
                            <div className="service-item">
                                <span className="service-icon">✓</span>
                                <div>
                                    <h4>Support 24/7</h4>
                                    <p>Round-the-clock customer support for any assistance you need during your trip</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Deals Section */}
            <section className="top-deals">
                <div className="container">
                    <div className="deals-header">
                        <h2 className="section-title">Featured Vehicles</h2>
                        <div className="deal-filters">
                            <button 
                                className={`filter-btn ${selectedCategory === 'All Cars' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('All Cars')}
                            >
                                All Cars
                            </button>
                            <button 
                                className={`filter-btn ${selectedCategory === 'SUV' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('SUV')}
                            >
                                SUV
                            </button>
                            <button 
                                className={`filter-btn ${selectedCategory === 'Sedan' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('Sedan')}
                            >
                                Sedan
                            </button>
                        </div>
                    </div>
                    <div className="cars-grid">
                        {filteredCars.slice(0, 8).map(car => (
                            <div key={car.id} className="car-card">
                                <div className="car-image-box">
                                    <img src={car.image} alt={car.name} className="car-img" />
                                    <button className="wishlist-btn">♡</button>
                                </div>
                                <h3>{car.name}</h3>
                                <div className="car-price">
                                    <span className="price">${car.price}</span>
                                    <span className="per-day">/day</span>
                                </div>
                                <div className="car-rating">
                                    <span className="stars">⭐ {car.rating}</span>
                                </div>
                                <button className="btn-book" onClick={() => setCurrentPage('cars')}>Book Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose">
                <div className="container">
                    <h2 className="section-title">We Are Ensuring The Best Customer Experience</h2>
                    <p className="section-subtitle">Our commitment is to deliver an exceptional and reliable service while maintaining the highest standards of quality and security</p>
                    <div className="features-circle">
                        <div className="center-image">
                            <img src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=400&fit=crop" alt="Center Car" className="center-car-img" />
                        </div>
                        <div className="feature-item top-left">
                            <span className="feature-icon">💰</span>
                            <span>Competitive Pricing</span>
                        </div>
                        <div className="feature-item top-right">
                            <span className="feature-icon">🏆</span>
                            <span>Top Extended Auto Warranties</span>
                        </div>
                        <div className="feature-item left">
                            <span className="feature-icon">🚨</span>
                            <span>Round-the-clock On-Demand Assistance</span>
                        </div>
                        <div className="feature-item right">
                            <span className="feature-icon">🛡️</span>
                            <span>Roadside Assistance 24/7</span>
                        </div>
                        <div className="feature-item bottom-left">
                            <span className="feature-icon">💳</span>
                            <span>More Flexible Payment Plans</span>
                        </div>
                        <div className="feature-item bottom-right">
                            <span className="feature-icon">⭐</span>
                            <span>Your Choice Of Insurance</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile App Section */}
            <section className="mobile-app">
                <div className="container">
                    <div className="app-content">
                        <div className="app-text">
                            <h2>Download the free RentalX app</h2>
                            <p>Get exclusive deals and manage your bookings on the go!</p>
                            <div className="app-buttons">
                                <button className="btn-app-download">🍎 Apple Store</button>
                                <button className="btn-app-download">🔵 Google Play</button>
                            </div>
                        </div>
                        <div className="app-image">
                            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=500&fit=crop" alt="Mobile App" className="app-preview-img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;