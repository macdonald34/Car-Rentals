const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../config/database');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Sign Up
router.post('/signup', (req, res) => {
  const { firstName, lastName, email, phone, password, confirmPassword } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Hash password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }

    const query = 'INSERT INTO users (firstName, lastName, email, phone, password) VALUES (?, ?, ?, ?, ?)';
    db.run(query, [firstName, lastName, email, phone || null, hashedPassword], function(err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(400).json({ message: 'Email already registered' });
        }
        return res.status(500).json({ message: 'Error creating account' });
      }

      const token = jwt.sign({ userId: this.lastID, email }, JWT_SECRET, { expiresIn: '7d' });
      res.status(201).json({
        message: 'Account created successfully',
        user: { id: this.lastID, firstName, lastName, email },
        token
      });
    });
  });
});

// Sign In
router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const query = 'SELECT * FROM users WHERE email = ?';
  db.get(query, [email], (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Error comparing passwords' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.json({
        message: 'Signed in successfully',
        user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email },
        token
      });
    });
  });
});

// Get user profile
router.get('/profile/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT id, firstName, lastName, email, phone, createdAt FROM users WHERE id = ?';

  db.get(query, [userId], (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  });
});

module.exports = router;
