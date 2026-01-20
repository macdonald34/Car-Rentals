# 🚗 RentalX - Car Rental Application

A full-stack car rental application built with **React**, **Node.js/Express**, and **SQLite**.

## 🎯 Features

### Frontend (React)
- 🏠 Beautiful responsive design with RentalX theme
- 🚗 12 cars with images and filtering
- 🔐 User authentication (Sign Up/Sign In)
- 📱 Mobile-responsive layout
- 🔍 Search and filter functionality
- 📧 Newsletter signup
- ℹ️ About Us page

### Backend (Node.js/Express)
- 👤 User registration & authentication with JWT
- 🚗 Car inventory management
- 📅 Complete booking system
- 🔒 Secure password hashing
- 📊 SQLite database
- ✅ Full REST API

## 🚀 Quick Start

### One-Click Start (Windows)
```bash
# Double-click this file:
start.bat
```

### Manual Start
```bash
# Terminal 1: Start Backend
cd backend
npm install  # First time only
npm run dev

# Terminal 2: Start Frontend
cd car
npm install  # First time only
npm start
```

Then open: **http://localhost:3000**

## 📋 Project Structure

```
car-rentals/
├── car/                          # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── services/
│   │   │   └── api.js          # Backend API client
│   │   └── ...
│   ├── package.json
│   └── README.md
│
├── backend/                      # Node.js Backend
│   ├── config/
│   │   └── database.js          # SQLite setup
│   ├── routes/
│   │   ├── auth.js              # Authentication
│   │   ├── cars.js              # Car listing
│   │   └── bookings.js          # Bookings
│   ├── server.js
│   ├── package.json
│   ├── .env                      # Config
│   └── README.md
│
├── SETUP_GUIDE.md               # Detailed setup guide
├── BACKEND_SETUP.md             # Backend API docs
├── QUICK_REFERENCE.md           # Quick reference
├── COMPLETION_CHECKLIST.md      # Feature checklist
├── start.bat                    # Quick start script
└── README.md                    # This file
```

## 🔗 API Endpoints

### Authentication
```
POST   /api/auth/signup      - Register user
POST   /api/auth/signin      - Login user
GET    /api/auth/profile/:id - Get profile
```

### Cars
```
GET    /api/cars             - Get all cars
GET    /api/cars/:id         - Get single car
GET    /api/cars/category/:cat - Filter by category
```

### Bookings
```
POST   /api/bookings         - Create booking
GET    /api/bookings/user/:id - User bookings
GET    /api/bookings/:id     - Get booking
PUT    /api/bookings/:id     - Update booking
DELETE /api/bookings/:id     - Cancel booking
```

## 🌐 Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:3000 | React app |
| Backend | http://localhost:5000 | REST API |
| Health Check | http://localhost:5000/api/health | API status |

## 🧪 Test It Out

### 1. Sign Up
1. Go to http://localhost:3000
2. Click "Sign Up"
3. Fill form with:
   - First Name: John
   - Last Name: Doe
   - Email: john@example.com
   - Phone: 555-1234567
   - Password: Password123
4. Click "Create Account"

### 2. Sign In
1. Click "Sign In"
2. Email: john@example.com
3. Password: Password123
4. Click "Sign In"

### 3. Browse Cars
- Go to "Cars" page
- View all 12 vehicles
- Use filters (All, SUV, Sedan)

### 4. API Testing
Open browser console and run:
```javascript
// Get all cars
fetch('http://localhost:5000/api/cars')
  .then(r => r.json())
  .then(d => console.log(d))

// Get health status
fetch('http://localhost:5000/api/health')
  .then(r => r.json())
  .then(d => console.log(d))
```

## 📚 Documentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete installation & setup
- **[BACKEND_SETUP.md](BACKEND_SETUP.md)** - Backend API details & testing
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick command reference
- **[backend/README.md](backend/README.md)** - Backend API documentation
- **[COMPLETION_CHECKLIST.md](COMPLETION_CHECKLIST.md)** - Feature verification

## 🔧 Tech Stack

### Frontend
- React 19.2.3
- React Router (navigation)
- CSS3 (custom styling)
- ES6+ JavaScript

### Backend
- Node.js
- Express.js
- SQLite3
- bcryptjs (password hashing)
- jsonwebtoken (JWT)
- CORS (cross-origin)
- dotenv (config)

### Database
- SQLite 3
- 3 tables: users, cars, bookings

## ⚙️ Configuration

The backend uses environment variables in `.env`:

```env
PORT=5000                                    # Server port
NODE_ENV=development                         # Environment
JWT_SECRET=your_jwt_secret_key_here         # Token secret
JWT_EXPIRE=7d                               # Token expiry
```

## 🔐 Security

- ✅ Passwords hashed with bcryptjs
- ✅ JWT token authentication
- ✅ Token expiration (7 days)
- ✅ CORS enabled for frontend
- ✅ Input validation
- ✅ Error handling

⚠️ **For production**: Update JWT_SECRET and enable HTTPS

## 📦 Dependencies

### Frontend
- react
- react-router-dom
- Standard CSS

### Backend
- express (4.18.2)
- sqlite3 (5.1.6)
- bcryptjs (2.4.3)
- jsonwebtoken (9.0.0)
- cors (2.8.5)
- dotenv (16.0.3)

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5000 in use | Change PORT in .env |
| CORS errors | Check backend is running |
| npm ERR! | Run `npm install` in both dirs |
| DB errors | Delete rentalx.db and restart |
| Auth fails | Clear localStorage, sign in again |

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for more details.

## 🎨 Design Features

- **Color Scheme**: Orange (#FF6B35) + Dark Blue (#1a2e52)
- **Layout**: Responsive grid (4-col desktop, 2-col tablet, 1-col mobile)
- **Components**: Card-based UI with smooth transitions
- **Fonts**: Modern, clean typography
- **Images**: Real car photos from Unsplash

## ✨ Highlights

- ✅ 11 fully functional API endpoints
- ✅ Complete CRUD operations for bookings
- ✅ Secure authentication system
- ✅ Responsive design (all devices)
- ✅ Sample data (12 cars)
- ✅ Auto-database initialization
- ✅ Comprehensive documentation
- ✅ One-click startup script

## 📈 Next Steps

1. **Install Dependencies**
   ```bash
   npm install  # in both car/ and backend/
   ```

2. **Start Servers**
   ```bash
   # Option A: Double-click start.bat
   # Option B: Run manually (see Quick Start above)
   ```

3. **Access Application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

4. **Test Features**
   - Sign up → Sign in → Browse cars → Create bookings

## 🚀 Future Enhancements

- [ ] Payment integration (Stripe)
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] User reviews/ratings
- [ ] Real-time availability
- [ ] Multi-location support
- [ ] Mobile app
- [ ] Advanced search filters

## 📝 Git Setup

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial Car Rentals app with backend"

# Add remote and push
git remote add origin <your-repo-url>
git push -u origin main
```

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

Built with ❤️ for car rental management.

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review the API endpoints
3. Check browser console for errors
4. Check terminal for server logs

---

## 🎉 Ready to Go!

Everything is set up and ready to run. Just execute `start.bat` (Windows) or follow the Quick Start guide above.

**Happy renting! 🚗**

---

**Status**: ✅ Production Ready  
**Version**: 1.0.0  
**Last Updated**: Today
