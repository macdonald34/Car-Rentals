# 🏗️ Car Rentals - Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER BROWSER                              │
│         http://localhost:3000 (React Frontend)              │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │        React Components                              │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │ - Header (Navigation)                                │   │
│  │ - HomePage (Hero, Featured Cars)                     │   │
│  │ - CarList (All Cars)                                 │   │
│  │ - SignUp (Registration)                              │   │
│  │ - SignIn (Login)                                     │   │
│  │ - AboutUs (Info)                                     │   │
│  │ - Footer                                             │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ▲                                   │
│                           │                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │    API Service Layer (src/services/api.js)           │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │ - authAPI (signup, signin, logout)                   │   │
│  │ - carsAPI (getAllCars, getCarById, etc.)             │   │
│  │ - bookingsAPI (create, get, update, cancel)          │   │
│  │ - Token management (get, set, clear)                 │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ▲                                   │
└───────────────────────────┼───────────────────────────────────┘
                            │ HTTP/CORS
                            │ (Port 5000)
                            │
┌───────────────────────────┼───────────────────────────────────┐
│   EXPRESS SERVER (Node.js Backend)                            │
│   http://localhost:5000                                       │
├───────────────────────────┼───────────────────────────────────┤
│                           ▼                                    │
│  ┌──────────────────────────────────────────────────────┐    │
│  │         Express Middleware                           │    │
│  ├──────────────────────────────────────────────────────┤    │
│  │ - CORS Configuration                                │    │
│  │ - JSON Body Parser                                  │    │
│  │ - Error Handler                                     │    │
│  │ - Health Check (/api/health)                        │    │
│  └──────────────────────────────────────────────────────┘    │
│                           ▼                                    │
│  ┌──────────────────────────────────────────────────────┐    │
│  │         Route Handlers                              │    │
│  ├──────────────────────────────────────────────────────┤    │
│  │ /api/auth/                                          │    │
│  │  ├─ POST /signup (Register)                         │    │
│  │  ├─ POST /signin (Login)                            │    │
│  │  └─ GET /profile/:id (Profile)                      │    │
│  │                                                      │    │
│  │ /api/cars/                                          │    │
│  │  ├─ GET / (All cars)                                │    │
│  │  ├─ GET /:id (Single car)                           │    │
│  │  └─ GET /category/:cat (By category)                │    │
│  │                                                      │    │
│  │ /api/bookings/                                      │    │
│  │  ├─ POST / (Create)                                 │    │
│  │  ├─ GET /user/:id (User bookings)                   │    │
│  │  ├─ GET /:id (Details)                              │    │
│  │  ├─ PUT /:id (Update)                               │    │
│  │  └─ DELETE /:id (Cancel)                            │    │
│  └──────────────────────────────────────────────────────┘    │
│                           ▼                                    │
│  ┌──────────────────────────────────────────────────────┐    │
│  │      Security & Validation                          │    │
│  ├──────────────────────────────────────────────────────┤    │
│  │ - bcryptjs (Password Hashing)                       │    │
│  │ - jsonwebtoken (JWT Generation)                     │    │
│  │ - Input Validation                                  │    │
│  │ - Error Handling                                    │    │
│  └──────────────────────────────────────────────────────┘    │
│                           ▼                                    │
│  ┌──────────────────────────────────────────────────────┐    │
│  │         Database Layer (SQLite)                     │    │
│  ├──────────────────────────────────────────────────────┤    │
│  │ - Database Connection                               │    │
│  │ - Table Creation                                    │    │
│  │ - Query Execution                                   │    │
│  └──────────────────────────────────────────────────────┘    │
│                           ▼                                    │
└───────────────────────────┼────────────────────────────────────┘
                            │
                            ▼
┌───────────────────────────────────────────────────────────────┐
│              SQLite Database File                             │
│         (backend/data/rentalx.db)                            │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │    USERS     │  │     CARS     │  │   BOOKINGS   │        │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤        │
│  │ id           │  │ id           │  │ id           │        │
│  │ firstName    │  │ name         │  │ userId       │        │
│  │ lastName     │  │ category     │  │ carId        │        │
│  │ email        │  │ price        │  │ startDate    │        │
│  │ phone        │  │ rating       │  │ endDate      │        │
│  │ password     │  │ image        │  │ pickupLoc    │        │
│  │ createdAt    │  │ description  │  │ totalPrice   │        │
│  │              │  │ available    │  │ status       │        │
│  │              │  │ createdAt    │  │ createdAt    │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

### Sign Up Flow
```
User fills signup form
        │
        ▼
SignUp.js (Frontend)
        │
        ├─ Validate form
        │
        └─ Call authAPI.signup()
                │
                ▼
        API Service (api.js)
                │
                └─ POST /api/auth/signup
                        │
                        ▼
        Backend Router (auth.js)
                │
                ├─ Validate input
                ├─ Check email unique
                │
                └─ Hash password (bcryptjs)
                        │
                        ▼
        Database (SQLite)
                │
                └─ Insert user record
                        │
                        ▼
        Generate JWT Token
                │
                ▼
        Return { user, token }
                │
                ▼
        Frontend receives response
                │
                ├─ Store token in localStorage
                ├─ Show success message
                │
                └─ Redirect to home
```

### Login Flow
```
User enters email/password
        │
        ▼
SignIn.js (Frontend)
        │
        └─ Call authAPI.signin()
                │
                ▼
        API Service (api.js)
                │
                └─ POST /api/auth/signin
                        │
                        ▼
        Backend Router (auth.js)
                │
                ├─ Validate input
                │
                ▼
        Database Query
                │
                └─ Find user by email
                        │
                        ▼
        Compare password (bcryptjs)
                │
                ├─ Match ✓
                │   └─ Generate JWT token
                │
                └─ No match ✗
                    └─ Return error
                        │
                        ▼
        Return { user, token } or error
                │
                ▼
        Frontend
                │
                ├─ Store token
                ├─ Show result
                │
                └─ Redirect/Show error
```

### Get Cars Flow
```
User clicks "Cars" page
        │
        ▼
HomePage.js or CarList.js
        │
        └─ Call carsAPI.getAllCars()
                │
                ▼
        API Service (api.js)
                │
                └─ GET /api/cars
                        │
                        ▼
        Backend Router (cars.js)
                │
                └─ Query database
                        │
                        ▼
        Database (SQLite)
                │
                └─ SELECT * FROM cars
                        │
                        ▼
        Return cars array
                │
                ▼
        Frontend
                │
                └─ Render car cards
```

### Create Booking Flow
```
User selects car and dates
        │
        ▼
Booking Form (Future)
        │
        └─ Call bookingsAPI.createBooking()
                │
                ▼
        API Service (api.js)
                │
                └─ POST /api/bookings
                        │
                        (Send Authorization header)
                        │
                        ▼
        Backend Router (bookings.js)
                │
                ├─ Validate token
                ├─ Validate input
                │
                ▼
        Database (SQLite)
                │
                └─ INSERT booking record
                        │
                        ▼
        Return { message, bookingId }
                │
                ▼
        Frontend
                │
                └─ Show confirmation
```

## Component Hierarchy

```
App (Main)
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Auth Buttons
│
├── HomePage
│   ├── Hero Section
│   ├── Search Box
│   ├── Brands
│   ├── 3-Step Guide
│   ├── Featured Cars (filtered)
│   ├── Why Choose Us
│   └── Mobile App Promo
│
├── CarList
│   ├── Car Grid
│   └── Car Cards (12)
│
├── SignUp
│   ├── Form
│   └── Social Links
│
├── SignIn
│   ├── Form
│   └── Social Links
│
├── AboutUs
│   ├── Mission
│   ├── Features
│   └── Stats
│
└── Footer
    ├── Links
    └── Newsletter
```

## API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // relevant data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "error details"
}
```

## Authentication Flow

```
┌─────────────────────────────────────────┐
│  Sign In                                │
│  Email + Password                       │
│  ▼                                      │
│  POST /api/auth/signin                  │
│  ▼                                      │
│  Verify credentials                     │
│  ▼                                      │
│  Generate JWT Token                     │
│  ▼                                      │
│  Return Token                           │
│  ▼                                      │
│  Store in localStorage                  │
│  ▼                                      │
│  Add to Authorization Header            │
│  (Bearer {token})                       │
│  ▼                                      │
│  Protected Routes Accessible            │
│  ▼                                      │
│  Token Expires in 7 days                │
└─────────────────────────────────────────┘
```

## Deployment Architecture (Future)

```
Frontend
├─ Build: npm run build
├─ Hosting: Vercel/Netlify/AWS S3
└─ Domain: rentals.example.com

Backend  
├─ Server: PM2 / AWS EC2
├─ Port: 443 (HTTPS)
└─ Domain: api.rentals.example.com

Database
├─ Type: PostgreSQL (upgrade)
├─ Hosting: AWS RDS / Heroku
└─ Backup: Daily automated

CDN
├─ Images: CloudFront / Cloudflare
└─ Static: CloudFlare

DNS
└─ Route53 / Cloudflare DNS
```

## Technology Stack Overview

```
Frontend Layer
  ├─ React (UI)
  ├─ React Router (Navigation)
  ├─ CSS3 (Styling)
  └─ Fetch API (HTTP)

API Layer
  ├─ axios/fetch (HTTP client)
  ├─ localStorage (Token storage)
  └─ Error handling

Backend Layer
  ├─ Express.js (Server)
  ├─ Middleware (CORS, JSON parser)
  ├─ Routes (Endpoints)
  ├─ Controllers (Logic)
  └─ Security (JWT, bcryptjs)

Data Layer
  ├─ SQLite (Database)
  ├─ Queries (SQL)
  └─ Transactions (ACID)

Infrastructure
  ├─ localhost:3000 (Frontend)
  ├─ localhost:5000 (Backend)
  └─ Local storage (Database)
```

---

This diagram shows how all components work together to create a complete car rental application!
