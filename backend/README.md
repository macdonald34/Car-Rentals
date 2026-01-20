# Car Rentals Backend API

A Node.js/Express backend API for the RentalX car rental application.

## Features

- User authentication (Sign Up, Sign In)
- JWT token-based authorization
- Car listing and filtering
- Booking management
- SQLite database

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root of the backend directory with:
```
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a new user account
- `POST /api/auth/signin` - Sign in with email and password
- `GET /api/auth/profile/:userId` - Get user profile

### Cars
- `GET /api/cars` - Get all available cars
- `GET /api/cars/:carId` - Get a specific car
- `GET /api/cars/category/:category` - Get cars by category

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings/user/:userId` - Get user's bookings
- `GET /api/bookings/:bookingId` - Get a specific booking
- `PUT /api/bookings/:bookingId` - Update booking status
- `DELETE /api/bookings/:bookingId` - Cancel a booking

## Database

The application uses SQLite for data storage. The database is automatically initialized on first run with the following tables:

- **users** - Stores user account information
- **cars** - Stores car inventory data
- **bookings** - Stores booking records

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. When a user signs up or signs in, they receive a token that should be included in the `Authorization` header for protected routes:

```
Authorization: Bearer {token}
```

## Error Handling

The API returns standard HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

## Development

To modify the database schema, edit the `config/database.js` file.

To add new routes, create new files in the `routes/` directory and import them in `server.js`.

## License

MIT
