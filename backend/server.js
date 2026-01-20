require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/database');
const authRoutes = require('./routes/auth');
const carsRoutes = require('./routes/cars');
const bookingsRoutes = require('./routes/bookings');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carsRoutes);
app.use('/api/bookings', bookingsRoutes);

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running', status: 'ok' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Initialize database and start server
db.initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚗 Car Rentals Backend running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
