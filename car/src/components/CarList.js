import React from 'react';
import './CarList.css';

const CarList = ({ cars }) => {
    return (
        <div className="car-list-page">
            <section className="car-list-section">
                <div className="container">
                    <h1 className="section-title">Our Fleet</h1>
                    <p className="section-subtitle">Choose from our wide selection of premium vehicles</p>
                    
                    <div className="cars-grid">
                        {cars.map(car => (
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
                                    <span className="stars">⭐ {car.rating || 4.8}</span>
                                </div>
                                <p className="car-description">{car.description || 'Premium rental experience'}</p>
                                <button className="btn-book">Book Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarList;