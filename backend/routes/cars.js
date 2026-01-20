const express = require('express');
const router = express.Router();
const { db } = require('../config/database');

// Get all cars
router.get('/', (req, res) => {
  const { category } = req.query;

  let query = 'SELECT * FROM cars WHERE available = 1';
  const params = [];

  if (category && category !== 'All Cars') {
    query += ' AND category = ?';
    params.push(category);
  }

  query += ' ORDER BY rating DESC';

  db.all(query, params, (err, cars) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching cars' });
    }

    res.json({
      success: true,
      count: cars.length,
      cars
    });
  });
});

// Get single car
router.get('/:carId', (req, res) => {
  const { carId } = req.params;
  const query = 'SELECT * FROM cars WHERE id = ?';

  db.get(query, [carId], (err, car) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching car' });
    }

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json(car);
  });
});

// Get cars by category
router.get('/category/:category', (req, res) => {
  const { category } = req.params;
  const query = 'SELECT * FROM cars WHERE category = ? AND available = 1';

  db.all(query, [category], (err, cars) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching cars' });
    }

    res.json({
      success: true,
      category,
      count: cars.length,
      cars
    });
  });
});

module.exports = router;
