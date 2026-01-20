const express = require('express');
const router = express.Router();
const { db } = require('../config/database');

// Create booking
router.post('/', (req, res) => {
  const { userId, carId, startDate, endDate, pickupLocation, totalPrice } = req.body;

  if (!userId || !carId || !startDate || !endDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const query = `
    INSERT INTO bookings (userId, carId, startDate, endDate, pickupLocation, totalPrice, status, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, 'pending', datetime('now'))
  `;

  db.run(
    query,
    [userId, carId, startDate, endDate, pickupLocation, totalPrice],
    function (err) {
      if (err) {
        return res.status(500).json({ message: 'Error creating booking' });
      }

      res.json({
        message: 'Booking created successfully',
        bookingId: this.lastID
      });
    }
  );
});

// Get user's bookings
router.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT b.*, c.name as carName, c.image as carImage, c.price as carPrice
    FROM bookings b
    JOIN cars c ON b.carId = c.id
    WHERE b.userId = ?
    ORDER BY b.createdAt DESC
  `;

  db.all(query, [userId], (err, bookings) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching bookings' });
    }

    res.json({
      success: true,
      count: bookings.length,
      bookings
    });
  });
});

// Get single booking
router.get('/:bookingId', (req, res) => {
  const { bookingId } = req.params;
  const query = `
    SELECT b.*, c.name as carName, c.image as carImage, c.price as carPrice
    FROM bookings b
    JOIN cars c ON b.carId = c.id
    WHERE b.id = ?
  `;

  db.get(query, [bookingId], (err, booking) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching booking' });
    }

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
  });
});

// Update booking status
router.put('/:bookingId', (req, res) => {
  const { bookingId } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const query = 'UPDATE bookings SET status = ? WHERE id = ?';

  db.run(query, [status, bookingId], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Error updating booking' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({
      message: 'Booking updated successfully',
      bookingId
    });
  });
});

// Cancel booking
router.delete('/:bookingId', (req, res) => {
  const { bookingId } = req.params;
  const query = 'UPDATE bookings SET status = ? WHERE id = ?';

  db.run(query, ['cancelled', bookingId], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Error cancelling booking' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({
      message: 'Booking cancelled successfully',
      bookingId
    });
  });
});

module.exports = router;
