const API_BASE_URL = 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Set token in localStorage
const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Clear token from localStorage
const clearToken = () => {
  localStorage.removeItem('token');
};

// Get Auth header
const getAuthHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Auth API calls
export const authAPI = {
  signup: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Sign up failed');
      }

      const data = await response.json();
      if (data.token) {
        setToken(data.token);
      }
      return data;
    } catch (error) {
      throw error;
    }
  },

  signin: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Sign in failed');
      }

      const data = await response.json();
      if (data.token) {
        setToken(data.token);
      }
      return data;
    } catch (error) {
      throw error;
    }
  },

  getProfile: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  logout: () => {
    clearToken();
  }
};

// Cars API calls
export const carsAPI = {
  getAllCars: async (category = null) => {
    try {
      let url = `${API_BASE_URL}/cars`;
      if (category && category !== 'All Cars') {
        url += `?category=${category}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getCarById: async (carId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cars/${carId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch car');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getCarsByCategory: async (category) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cars/category/${category}`);

      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
};

// Bookings API calls
export const bookingsAPI = {
  createBooking: async (bookingData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify(bookingData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create booking');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getUserBookings: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  getBookingById: async (bookingId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch booking');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  updateBooking: async (bookingId, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify({ status })
      });

      if (!response.ok) {
        throw new Error('Failed to update booking');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  cancelBooking: async (bookingId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        }
      });

      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
};

export { getToken as getAuthToken, setToken as setAuthToken, clearToken as clearAuthToken };
