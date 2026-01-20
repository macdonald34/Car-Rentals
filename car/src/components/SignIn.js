import React, { useState } from 'react';
import './Auth.css';
import { authAPI } from '../services/api';

const SignIn = ({ setCurrentPage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setErrors('Please enter both email and password');
            return;
        }

        setLoading(true);
        setErrors('');
        setSuccessMessage('');

        try {
            const response = await authAPI.signin(email, password);
            setSuccessMessage('Sign in successful! Redirecting to home page...');
            
            // Store user ID if needed
            if (response.user) {
                localStorage.setItem('userId', response.user.id);
            }
            
            setTimeout(() => {
                setCurrentPage('home');
            }, 2000);
        } catch (error) {
            setErrors(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-form-wrapper">
                    <div className="auth-header">
                        <h1>Welcome Back!</h1>
                        <p>Sign in to your RentalX account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        {successMessage && (
                            <div className="success-message">✓ {successMessage}</div>
                        )}
                        {errors && (
                            <div className="error-message">✗ {errors}</div>
                        )}

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    disabled={loading}
                                />
                                <span>Remember me</span>
                            </label>
                            <a href="#forgot" className="forgot-password">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn-signin-submit" disabled={loading}>
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <div className="social-login">
                        <button className="btn-social google">
                            <span>🔵</span> Sign in with Google
                        </button>
                        <button className="btn-social facebook">
                            <span>f</span> Sign in with Facebook
                        </button>
                    </div>

                    <div className="auth-footer">
                        <p>Don't have an account? <a href="#signup" onClick={() => setCurrentPage('signup')}>Sign up here</a></p>
                    </div>
                </div>

                <div className="auth-image">
                    <div className="image-placeholder">
                        <img src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=600&fit=crop" alt="Sign In" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
