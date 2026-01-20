import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="about-hero">
                <div className="container">
                    <h1>About RentalX</h1>
                    <p>Your trusted partner in car rentals since 2014</p>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="about-section">
                        <h2>Who We Are</h2>
                        <p>
                            RentalX is a leading car rental service provider with over 10 years of experience in the industry.
                            We pride ourselves on offering the best selection of vehicles at competitive prices, backed by
                            exceptional customer service and flexible rental options.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>Our Mission</h2>
                        <p>
                            To provide affordable, reliable, and convenient car rental services to travelers worldwide. We are
                            committed to making your travel experience seamless and enjoyable, whether you're on a business trip
                            or a vacation.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>Why Choose Us?</h2>
                        <ul className="about-list">
                            <li>✓ Wide selection of well-maintained vehicles</li>
                            <li>✓ Competitive pricing and flexible rental terms</li>
                            <li>✓ 24/7 customer support and roadside assistance</li>
                            <li>✓ Easy online booking and transparent pricing</li>
                            <li>✓ Insurance options for peace of mind</li>
                            <li>✓ Free cancellation up to 48 hours before pickup</li>
                        </ul>
                    </div>

                    <div className="stats-section">
                        <div className="stat">
                            <h3>10+</h3>
                            <p>Years of Experience</p>
                        </div>
                        <div className="stat">
                            <h3>50,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stat">
                            <h3>500+</h3>
                            <p>Premium Vehicles</p>
                        </div>
                        <div className="stat">
                            <h3>24/7</h3>
                            <p>Customer Support</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;