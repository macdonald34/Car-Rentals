# 🚗 Car Rentals - Quick Reference Guide

## 🚀 Start the App (Windows)
```bash
# Option 1: Double-click start.bat
start.bat

# Option 2: Manual start
# Terminal 1
cd backend && npm run dev

# Terminal 2 (new terminal)
cd car && npm start
```

## 🌐 Access Points
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

## 📋 API Endpoints Quick Reference

### Auth
```
POST   /api/auth/signup         - Create account
POST   /api/auth/signin         - Login
GET    /api/auth/profile/:id    - Get profile
```

### Cars
```
GET    /api/cars                - All cars
GET    /api/cars/:id            - Single car
GET    /api/cars/category/:cat  - By category
```

### Bookings
```
POST   /api/bookings            - Create booking
GET    /api/bookings/user/:id   - User bookings
GET    /api/bookings/:id        - Get booking
PUT    /api/bookings/:id        - Update status
DELETE /api/bookings/:id        - Cancel booking
```

## 🧪 Test Credentials
```
Email: test@example.com
Password: Password123
```

## 📁 Key Files
- Backend: `/backend/server.js`
- Frontend API: `/car/src/services/api.js`
- Database: `/backend/config/database.js`
- Auth Routes: `/backend/routes/auth.js`

## 🔧 Configuration
Edit `/backend/.env`:
```
PORT=5000
JWT_SECRET=change_me_in_production
JWT_EXPIRE=7d
```

## 📦 Dependencies

**Frontend (React)**
```
react, react-router-dom, etc.
```

**Backend (Node.js)**
```
express, cors, bcryptjs, jsonwebtoken, sqlite3, dotenv
```

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Port 5000 in use | Change PORT in .env |
| CORS error | Check backend is running |
| npm ERR! | Run `npm install` in both dirs |
| DB error | Delete car-rentals.db, restart |
| Auth fails | Clear localStorage, sign in again |

## 📝 Development Workflow

1. **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend** (in new terminal)
   ```bash
   cd car
   npm start
   ```

3. **Test Features**
   - Sign Up → Check database
   - Sign In → Check token in localStorage
   - View Cars → Check /api/cars endpoint
   - Create Booking → Check bookings table

## 🔐 Security Reminders

- ⚠️ Change JWT_SECRET before production
- ⚠️ Use HTTPS in production
- ⚠️ Add rate limiting
- ⚠️ Validate all inputs
- ⚠️ Sanitize data

## 📚 Documentation

- Full Setup: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- Backend Docs: [backend/README.md](backend/README.md)
- Backend Details: [BACKEND_SETUP.md](BACKEND_SETUP.md)

## ✨ Features

✅ User Authentication (JWT)
✅ Car Listings (12 cars)
✅ Booking System
✅ SQLite Database
✅ CORS Enabled
✅ Password Hashing
✅ Error Handling

## 🎯 Next Steps

1. Install dependencies (if not done)
2. Run start.bat or manually start servers
3. Go to http://localhost:3000
4. Sign up with test data
5. Test sign in
6. Browse cars
7. Create bookings (UI ready)

## 💡 Tips

- Backend auto-initializes database on first run
- Token expires in 7 days
- Passwords hashed with bcryptjs
- CORS configured for localhost:3000
- Check browser console for API errors
- Check terminal for server errors

---

**Ready to start?** → Double-click `start.bat`

**Questions?** → See the detailed guides in the project root

**Happy coding! 🎉**
