import React, { useState } from 'react';
import { FaCar, FaCalendarAlt, FaUser, FaEnvelope, FaSpinner } from 'react-icons/fa';
import './BookingForm.css'; // Create this CSS file

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startDate: '',
    endDate: '',
    carType: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const carOptions = [
    'Economy',
    'Compact',
    'Mid-size',
    'Full-size',
    'SUV',
    'Luxury',
    'Minivan'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = 'End date must be after start date';
    }
    if (!formData.carType) newErrors.carType = 'Please select a car type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send booking data to your backend
      const response = await fetch('https://your-backend-api.com/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Send confirmation email
        await fetch('https://your-backend-api.com/send-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: formData.email,
            subject: 'Your Car Rental Booking Confirmation',
            text: `Thank you ${formData.name} for booking with us!`
          }),
        });

        setSubmitStatus({ success: true, message: 'Booking confirmed! Check your email for details.' });
        setFormData({
          name: '',
          email: '',
          startDate: '',
          endDate: '',
          carType: ''
        });
      } else {
        throw new Error('Failed to process booking');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus({ success: false, message: 'Error processing booking. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <FaCar className="booking-icon" />
        <h1>Book Your Rental Car</h1>
      </div>
      
      {submitStatus && (
        <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-error'}`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="booking-form">
        <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
          <label>
            <FaUser className="input-icon" /> Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
          <label>
            <FaEnvelope className="input-icon" /> Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="date-row">
          <div className={`form-group ${errors.startDate ? 'has-error' : ''}`}>
            <label>
              <FaCalendarAlt className="input-icon" /> Pick-up Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.startDate && <span className="error-message">{errors.startDate}</span>}
          </div>

          <div className={`form-group ${errors.endDate ? 'has-error' : ''}`}>
            <label>
              <FaCalendarAlt className="input-icon" /> Return Date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              min={formData.startDate || new Date().toISOString().split('T')[0]}
            />
            {errors.endDate && <span className="error-message">{errors.endDate}</span>}
          </div>
        </div>

        <div className={`form-group ${errors.carType ? 'has-error' : ''}`}>
          <label>
            <FaCar className="input-icon" /> Car Type
          </label>
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
          >
            <option value="">Select a car type</option>
            {carOptions.map((car) => (
              <option key={car} value={car}>
                {car}
              </option>
            ))}
          </select>
          {errors.carType && <span className="error-message">{errors.carType}</span>}
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="spinner" />
              Processing...
            </>
          ) : (
            'Confirm Booking'
          )}
        </button>
      </form>
    </div>
  );
}

export default BookingForm;