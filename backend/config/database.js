const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/rentalx.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Database opening error: ', err);
  else console.log('Connected to SQLite database');
});

const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Users table
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          firstName TEXT NOT NULL,
          lastName TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          phone TEXT,
          password TEXT NOT NULL,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) console.error('Error creating users table:', err);
      });

      // Cars table
      db.run(`
        CREATE TABLE IF NOT EXISTS cars (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          category TEXT NOT NULL,
          price REAL NOT NULL,
          rating REAL,
          image TEXT,
          description TEXT,
          available INTEGER DEFAULT 1,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) console.error('Error creating cars table:', err);
      });

      // Bookings table
      db.run(`
        CREATE TABLE IF NOT EXISTS bookings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userId INTEGER NOT NULL,
          carId INTEGER NOT NULL,
          pickupDate TEXT NOT NULL,
          returnDate TEXT NOT NULL,
          totalPrice REAL NOT NULL,
          status TEXT DEFAULT 'pending',
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY(userId) REFERENCES users(id),
          FOREIGN KEY(carId) REFERENCES cars(id)
        )
      `, (err) => {
        if (err) console.error('Error creating bookings table:', err);
      });

      // Insert sample cars if not exists
      db.run(`
        INSERT OR IGNORE INTO cars (id, name, category, price, rating, description)
        VALUES 
          (1, 'Honda Pilot 2024', 'SUV', 120, 4.8, 'Spacious and comfortable SUV'),
          (2, 'Honda Civic Sedan', 'Sedan', 95, 4.9, 'Reliable sedan for daily commute'),
          (3, 'Toyota Camry', 'Sedan', 110, 4.7, 'Smooth and economical sedan'),
          (4, 'Toyota RAV4', 'SUV', 115, 4.8, 'Perfect for family trips'),
          (5, 'Tesla Model 3', 'Sedan', 150, 5.0, 'Electric luxury sedan'),
          (6, 'Ford Explorer', 'SUV', 135, 4.6, 'Powerful SUV for adventures'),
          (7, 'Chevrolet Tahoe', 'SUV', 145, 4.7, 'Large family SUV'),
          (8, 'BMW 3 Series', 'Sedan', 125, 4.9, 'Premium luxury sedan'),
          (9, 'Mercedes-Benz C-Class', 'Sedan', 140, 4.8, 'Elegant luxury car'),
          (10, 'Audi A4', 'Sedan', 130, 4.7, 'Sophisticated sedan'),
          (11, 'Range Rover Sport', 'SUV', 160, 4.9, 'Luxury performance SUV'),
          (12, 'Mazda CX-5', 'SUV', 105, 4.6, 'Affordable compact SUV')
      `, (err) => {
        if (err) console.error('Error inserting cars:', err);
        else resolve();
      });
    });
  });
};

module.exports = {
  db,
  initializeDatabase
};
