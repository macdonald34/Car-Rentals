import React, { useState } from 'react';
import './Auth.css';
import { authAPI } from '../services/api';

const SignUp = ({ setCurrentPage }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setErrors({});
        setSuccessMessage('');

        try {
            const response = await authAPI.signup(formData);
            setSuccessMessage('Account created successfully! Redirecting to home page...');
            
            // Store user info if needed
            setTimeout(() => {
                setCurrentPage('home');
            }, 2000);
        } catch (error) {
            setErrors({ submit: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-form-wrapper">
                    <div className="auth-header">
                        <h1>Create Account</h1>
                        <p>Join RentalX and get amazing car rental deals</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form signup-form">
                        {successMessage && (
                            <div className="success-message">✓ {successMessage}</div>
                        )}
                        {errors.submit && (
                            <div className="error-message">✗ {errors.submit}</div>
                        )}

                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                />
                                {errors.firstName && <span className="error">{errors.firstName}</span>}
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                />
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a strong password"
                                value={formData.password}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                        </div>

                        <label className="terms-checkbox">
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                disabled={loading}
                            />
                            <span>I agree to the <a href="#terms">Terms and Conditions</a></span>
                        </label>
                        {errors.agreeTerms && <span className="error">{errors.agreeTerms}</span>}

                        <button type="submit" className="btn-signup-submit" disabled={loading}>
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <div className="social-login">
                        <button className="btn-social google">
                            <span>🔵</span> Sign up with Google
                        </button>
                        <button className="btn-social facebook">
                            <span>f</span> Sign up with Facebook
                        </button>
                    </div>

                    <div className="auth-footer">
                        <p>Already have an account? <a href="#signin" onClick={() => setCurrentPage('signin')}>Sign in here</a></p>
                    </div>
                </div>

                <div className="auth-image">
                    <div className="image-placeholder">
                        <img src="https://images.unsplash.com/photo-1606611013016-969c19d24e6f?w=500&h=600&fit=crop" alt="Sign Up" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
