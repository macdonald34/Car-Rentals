import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaSearch, FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState({
    location: '',
    pickupDate: '',
    returnDate: '',
    carType: 'all'
  });

  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
    // Simulate API call for featured cars
    const fetchFeaturedCars = async () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        setFeaturedCars([
          {
            id: 1,
            name: 'Toyota Camry 2023',
            type: 'Sedan',
            price: 75,
            rating: 4.8,
            image: '/assets/images/toyota-camry.jpg',
            seats: 5,
            transmission: 'Automatic'
          },
          {
            id: 2,
            name: 'Ford Mustang',
            type: 'Sports',
            price: 120,
            rating: 4.9,
            image: '/.assets/images/ford-mustang.jpg',
            seats: 4,
            transmission: 'Manual'
          },
          {
            id: 3,
            name: 'Chevrolet Suburban',
            type: 'SUV',
            price: 110,
            rating: 4.7,
            image: '/assets/images/chevrolet-suburban.jpg',
            seats: 8,
            transmission: 'Automatic'
          }
        ]);
      }, 500);
    };

    fetchFeaturedCars();
  }, []);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would redirect to search results
    console.log('Search submitted:', searchQuery);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url('./assets/hero.jpg')` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Rent the Perfect Car for Your Journey</h1>
            <p>Choose from our wide selection of vehicles at competitive prices</p>
            
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <div className="form-group">
                <FaMapMarkerAlt className="input-icon" />
                <input 
                  type="text" 
                  name="location" 
                  placeholder="Pick-up Location" 
                  value={searchQuery.location}
                  onChange={handleSearchChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <FaCalendarAlt className="input-icon" />
                <input 
                  type="date" 
                  name="pickupDate" 
                  value={searchQuery.pickupDate}
                  onChange={handleSearchChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <FaCalendarAlt className="input-icon" />
                <input 
                  type="date" 
                  name="returnDate" 
                  value={searchQuery.returnDate}
                  onChange={handleSearchChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <FaCar className="input-icon" />
                <select 
                  name="carType" 
                  value={searchQuery.carType}
                  onChange={handleSearchChange}
                >
                  <option value="all">All Car Types</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="sports">Sports</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              
              <button type="submit" className="search-button">
                <FaSearch /> Search Cars
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="featured-cars">
        <div className="container">
          <h2>Featured Vehicles</h2>
          <p className="section-subtitle">Browse our most popular rental options</p>
          
          <div className="cars-grid">
            {featuredCars.map(car => (
              <div key={car.id} className="car-card">
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                  <div className="car-badge">{car.type}</div>
                </div>
                <div className="car-details">
                  <h3>{car.name}</h3>
                  <div className="car-rating">
                    <FaStar className="star-icon" />
                    <span>{car.rating}</span>
                  </div>
                  <div className="car-specs">
                    <span><FaUserAlt /> {car.seats} seats</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="car-price">
                    ${car.price} <span>/ day</span>
                  </div>
                  <Link to={`/cars/${car.id}`} className="view-details-btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/cars" className="view-all-btn">
            View All Vehicles →
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Service</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaCar />
              </div>
              <h3>Wide Selection</h3>
              <p>Choose from 100+ vehicles of all types and classes</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaStar />
              </div>
              <h3>Best Rates</h3>
              <p>Competitive prices with no hidden fees</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Convenient Locations</h3>
              <p>Multiple pickup locations across the city</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;