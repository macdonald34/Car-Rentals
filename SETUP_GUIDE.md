# Car Rentals Application - Setup and Running Guide

This is a full-stack car rental application built with React frontend and Node.js/Express backend.

## Project Structure

```
car-rentals/
├── car/                          # React Frontend
│   ├── package.json
│   ├── public/
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── services/
│   │   │   └── api.js           # API service for backend calls
│   │   ├── App.js
│   │   └── index.js
│   └── ...
│
└── backend/                      # Node.js Backend
    ├── package.json
    ├── server.js                 # Express server setup
    ├── .env                      # Environment variables
    ├── config/
    │   └── database.js           # SQLite database setup
    ├── routes/
    │   ├── auth.js              # Authentication routes
    │   ├── cars.js              # Car listing routes
    │   └── bookings.js          # Booking management routes
    └── ...
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation & Setup

### Step 1: Install Frontend Dependencies

```bash
cd car
npm install
```

### Step 2: Install Backend Dependencies

```bash
cd ../backend
npm install
```

### Step 3: Configure Backend Environment

The backend needs a `.env` file (already created). You can update it if needed:

```bash
# backend/.env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_change_in_production
JWT_EXPIRE=7d
```

## Running the Application

You'll need TWO terminal windows/tabs:

### Terminal 1: Start Backend Server

```bash
cd backend
npm run dev
```

This starts the Express server on `http://localhost:5000`

You should see:
```
🚗 Car Rentals Backend running on http://localhost:5000
```

### Terminal 2: Start Frontend Application

```bash
cd car
npm start
```

This starts the React development server on `http://localhost:3000`

Your browser should automatically open to `http://localhost:3000`

## Features

### Frontend (React)
- 🏠 Beautiful RentalX-themed design with orange color scheme
- 🚗 Car listing with 12 vehicles and images
- 🔍 Search and filter functionality
- 🔐 User authentication (Sign In/Sign Up)
- 📱 Responsive design (mobile, tablet, desktop)
- 🗺️ About Us page
- 📧 Newsletter signup

### Backend (Node.js/Express)
- 👤 User registration and authentication with JWT
- 🚗 Car inventory management
- 📅 Booking system
- 🔒 Password hashing with bcryptjs
- 📊 SQLite database

## API Features

### Authentication
- Create new user accounts
- Sign in with email/password
- JWT token generation (7-day expiration)
- User profile retrieval

### Cars
- Fetch all cars
- Filter by category (SUV, Sedan, etc.)
- Get individual car details

### Bookings
- Create bookings
- View booking history
- Update booking status
- Cancel bookings

## Usage

1. **Open the app** at `http://localhost:3000`
2. **Sign Up**: Create a new account
3. **Sign In**: Log in with your credentials
4. **Browse Cars**: View available vehicles
5. **Book a Car**: Select a car and make a booking (UI ready, feature to be fully integrated)

## Testing Authentication

### Sign Up Flow:
1. Click "Sign Up" in the header
2. Fill in all fields (First Name, Last Name, Email, Phone, Password)
3. Click "Create Account"
4. You should see a success message and be redirected to home

### Sign In Flow:
1. Click "Sign In" in the header
2. Enter your email and password
3. Click "Sign In"
4. You should see a success message and be redirected to home

The token is automatically stored in localStorage for authenticated requests.

## Database

The database is automatically initialized with:
- User table (for storing account information)
- Car table (12 sample cars with details)
- Booking table (for managing reservations)

All data is stored in SQLite (car-rentals.db file in backend directory).

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000                                    # Backend server port
NODE_ENV=development                         # Environment type
JWT_SECRET=change_me_in_production          # Secret key for JWT tokens
JWT_EXPIRE=7d                               # Token expiration time
```

## Common Issues

### Port 5000 already in use:
Change the PORT in `.env` file to another port (e.g., 5001)

### CORS errors:
Make sure the backend is running on `http://localhost:5000` before making requests

### Database errors:
The database is automatically created on first run. If you encounter issues, delete `car-rentals.db` and restart the server.

### Module not found errors:
Run `npm install` in both frontend and backend directories

## Development

### Adding new routes:
1. Create a new file in `backend/routes/`
2. Import it in `backend/server.js`
3. Add route handler

### Modifying database schema:
Edit `backend/config/database.js` and restart the server

### Updating frontend:
Simply save your changes in the `car/src/` directory - hot reload is enabled

## Production Deployment

Before deploying to production:

1. Update `.env` with secure JWT_SECRET
2. Set NODE_ENV to 'production'
3. Build frontend: `npm run build`
4. Use a process manager like PM2 for the backend
5. Set up HTTPS/SSL certificates
6. Configure CORS properly for your domain

## Next Steps

1. ✅ Backend API created with all endpoints
2. ✅ Frontend connected to backend API
3. ✅ Authentication system implemented
4. 📋 Complete booking flow integration
5. 📋 Payment integration (Stripe/PayPal)
6. 📋 Email notifications
7. 📋 Admin dashboard
8. 📋 Review/rating system

## Support

For issues or questions, check:
- Backend: `backend/README.md`
- Frontend: `car/README.md`

## License

MIT
