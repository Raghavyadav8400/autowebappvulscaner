# VulnScan - OWASP Vulnerability Scanner

A modern web application for scanning and analyzing OWASP vulnerabilities. Built with Next.js, Express.js, MongoDB, and real-time vulnerability detection.

## 🎯 Features

- ✅ **Real-time URL Scanning** - Scan any website for security vulnerabilities
- ✅ **MongoDB Integration** - Persistent user data and scan history
- ✅ **User Authentication** - Secure signup and login with JWT tokens
- ✅ **Scan History** - Save and track scans for authenticated users
- ✅ **OWASP Analysis** - Detailed vulnerability reports based on OWASP standards
- ✅ **Beautiful UI** - Modern, responsive design with light theme
- ✅ **Security Headers Check** - Analyzes missing security headers
- ✅ **Severity Classification** - Critical, High, Medium, Low, Info severity levels
- ✅ **Visual Charts** - Pie chart showing severity distribution

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.2.2
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Charts:** SVG-based donut/pie charts
- **Storage:** LocalStorage for authentication tokens

### Backend
- **Server:** Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcryptjs for password hashing
- **CORS:** Enabled for localhost:3000

## 📋 Prerequisites

Before installation, ensure you have:

1. **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
2. **MongoDB** (Local or Atlas Cloud) - [Download](https://www.mongodb.com/try/download/community)

## ⚡ Quick Start

### Option A: Automatic Setup (Recommended)

#### Windows Users:
```bash
install.bat
```

#### macOS/Linux Users:
```bash
bash install.sh
```

### Option B: Manual Setup

#### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

#### 2. Configure Backend
Create a `.env` file in the `backend` directory:
```env
MONGODB_URI=mongodb://localhost:27017/autowebappvulscaner
JWT_SECRET=your-super-secret-key-change-this
PORT=5000
NODE_ENV=development
```

#### 3. Start Backend
```bash
cd backend
npm run dev
```

Expected output:
```
✅ MongoDB connected successfully
Backend listening on http://localhost:5000
```

#### 4. Install Frontend Dependencies
```bash
cd frontend
npm install
```

#### 5. Start Frontend
```bash
cd frontend
npm run dev
```

Open browser: `http://localhost:3000`

## 🚀 Usage

### 1. Signup
- Go to `http://localhost:3000/signup`
- Enter email and password (minimum 6 characters)
- Confirm password
- Account created and automatically logged in

### 2. Login
- Go to `http://localhost:3000/login`
- Enter registered email and password
- Session saved in browser

### 3. Scan Website
- Return to homepage or click "Scan"
- Enter any website URL (e.g., `https://example.com`)
- Click "Scan Website"
- View detailed vulnerability report with:
  - Severity distribution chart
  - Individual finding details
  - OWASP classification
  - Fix recommendations

### 4. View History
- Authenticated users: scans automatically saved
- Uses token from localStorage
- History persists across sessions

## 📊 Vulnerability Checks

The scanner analyzes for:

| Check | Severity | Category |
|-------|----------|----------|
| HTTP (no HTTPS) | High | Cryptographic Failures |
| Missing HSTS | Medium | Cryptographic Failures |
| Missing CSP | High | Security Misconfiguration |
| Missing X-Frame-Options | Medium | Security Misconfiguration |
| Missing X-Content-Type-Options | Medium | Security Misconfiguration |
| Missing Referrer-Policy | Low | Security Misconfiguration |
| Inline Scripts | Medium | XSS Prevention |
| Unsafe JavaScript | Medium | Injection |
| Server Info Disclosure | Low | Security Misconfiguration |
| 5xx Errors | Medium | Error Handling |

## 📁 Project Structure

```
autowebappvulscaner/
├── backend/
│   ├── index.js                 # Main server file
│   ├── connection.js            # MongoDB connection
│   ├── package.json
│   ├── .env.example             # Environment variables template
│   ├── models/
│   │   └── usersmodels.js      # User & Auth models
│   └── routes/
│       └── userroutes.js        # Auth endpoints
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.js          # Main dashboard
│   │   │   ├── layout.js
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── about_us/
│   │   │   ├── contact/
│   │   │   ├── pricing/
│   │   │   └── topten_vulnerability/
│   │   └── components/
│   │       ├── navbar.jsx
│   │       └── footer.jsx
│   ├── package.json
│   └── next.config.mjs
├── MONGODB_SETUP.md             # MongoDB configuration guide
├── install.sh                   # Linux/Mac auto-installer
└── install.bat                  # Windows auto-installer
```

## 🔐 Authentication Flow

```
1. User Signup
   └─> Create user with hashed password
   └─> Generate JWT token
   └─> Save to localStorage
   └─> Redirect to dashboard

2. User Login
   └─> Verify email & password
   └─> Generate new JWT token
   └─> Save to localStorage
   └─> Redirect to dashboard

3. Authenticated Requests
   └─> Attach token to API requests
   └─> Backend verifies token
   └─> Returns user-specific data

4. Logout
   └─> Clear localStorage
   └─> Token automatically removed
```

## 🔄 API Endpoints

### Health Check
```
GET /api/health
```

### Authentication
```
POST /api/auth/signup
Body: { email, password }

POST /api/auth/login
Body: { email, password }

GET /api/auth/scans
Headers: Authorization: Bearer <token>
```

### Scanning
```
POST /api/scan
Body: { url }
Headers: Authorization: Bearer <token> (optional)
```

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: {"kind":"state","address":"localhost","type":"connect"}
```
**Solution:**
- Start MongoDB: `mongod` (local) or check MongoDB Atlas
- Verify MONGODB_URI in .env file

### Port Already in Use
```
Error: listen EADDRINUSE :::5000
```
**Solution:**
```bash
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### CORS Error
```
Error: Access to XMLHttpRequest has been blocked by CORS
```
**Solution:**
- Ensure backend is running on `http://localhost:5000`
- Check that `cors()` is enabled in backend `index.js`

### Duplicate User Error
```
Error: E11000 duplicate key error for email
```
**Solution:**
- Email already registered
- Use different email or delete user from MongoDB

### Token Expired
```
Error: jwt expired
```
**Solution:**
- Login again to get a new token
- Token expires after 7 days

## 📚 Advanced Configuration

### Change MongoDB to Atlas (Cloud)

1. Create cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get connection string
3. Update `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/autowebappvulscaner
```

### Custom JWT Secret
```env
JWT_SECRET=your-very-secure-random-string-here-minimum-32-characters
```

### Change Server Port
```env
PORT=3001
```

## 🚢 Deployment

### Deploy Backend (Heroku)
```bash
# Create Heroku app
heroku create your-app-name

# Add MongoDB Atlas connection
heroku config:set MONGODB_URI=<your-atlas-uri>
heroku config:set JWT_SECRET=<secure-random-string>

# Deploy
git push heroku main
```

### Deploy Frontend (Vercel)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Update frontend `.env.local` with backend URL:
```env
NEXT_PUBLIC_API_URL=https://your-backend.herokuapp.com
```

## 📝 License

This project is open source and available under the ISC License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions:
1. Check [MONGODB_SETUP.md](MONGODB_SETUP.md) for MongoDB help
2. Review API logs in terminal
3. Check browser console for frontend errors

## 🎓 Learning Resources

- [OWASP Top 10](https://owasp.org/Top10/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Next.js Documentation](https://nextjs.org/docs)
- [JWT Authentication](https://jwt.io/introduction)

---

**Built with ❤️ for security-conscious developers**
