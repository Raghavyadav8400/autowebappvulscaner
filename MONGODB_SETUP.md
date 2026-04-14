# MongoDB Setup Guide

## Prerequisites
Make sure MongoDB is installed and running on your system.

### Option 1: Local MongoDB Installation

#### Windows
1. Download MongoDB Community Edition from: https://www.mongodb.com/try/download/community
2. Run the installer and follow the installation wizard
3. MongoDB will be installed and automatically start as a service
4. Verify installation by opening Command Prompt and running:
   ```
   mongo --version
   ```

#### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Linux (Ubuntu)
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

### Option 2: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Add it to your `.env` file (see below)

---

## Backend Setup

### Step 1: Install Dependencies
Navigate to the backend directory and install packages:
```bash
cd backend
npm install
```

This will install mongoose and other required packages.

### Step 2: Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/autowebappvulscaner

# JWT Secret (change this to a secure random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Port
PORT=5000
```

**For MongoDB Atlas**, change the MONGODB_URI to:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/autowebappvulscaner?retryWrites=true&w=majority
```

### Step 3: Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
node index.js
```

You should see:
```
✅ MongoDB connected successfully
Backend listening on http://localhost:5000
```

---

## Frontend Setup

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

---

## Testing the Connection

### Test Backend Health
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Backend is running"
}
```

### Test Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

Expected response:
```json
{
  "message": "Signup successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "email": "test@example.com",
    "createdAt": "2023-..."
  }
}
```

### Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

---

## Common Issues & Solutions

### Issue: `connect ECONNREFUSED`
**Cause:** MongoDB is not running
**Solution:** Start MongoDB service
- Windows: MongoDB should auto-start
- macOS: `brew services start mongodb-community`
- Linux: `sudo systemctl start mongod`

### Issue: `MongooseError: Cannot connect`
**Cause:** Wrong MongoDB URI or MongoDB not accessible
**Solution:** 
- Check MONGODB_URI in .env file
- Verify MongoDB is running: `mongo` command
- Check firewall settings

### Issue: Duplicate key error when signing up
**Cause:** Email already exists in database
**Solution:** Use a different email or delete the collection from MongoDB

### Issue: JWT Token errors
**Cause:** JWT_SECRET mismatch or token has expired
**Solution:** Ensure JWT_SECRET in .env is consistent

---

## Verify Database Contents

Use MongoDB Compass (GUI) or MongoDB Shell:

### Using MongoDB Shell
```bash
mongo
use autowebappvulscaner
db.users.find()
```

### Using MongoDB Compass
1. Download: https://www.mongodb.com/products/tools/compass
2. Connect to `mongodb://localhost:27017`
3. Browse the `autowebappvulscaner` database

---

## Production Deployment

For production (Heroku, Railway, Vercel, etc.):

1. Set up MongoDB Atlas cluster
2. Add environment variables to deployment platform
3. Update MONGODB_URI to use MongoDB Atlas connection string
4. Ensure JWT_SECRET is a strong random string
5. Update CORS origin if needed

---

## Troubleshooting

If you encounter issues:

1. **Check backend logs** for error messages
2. **Verify MongoDB is running**: `mongo --eval "db.runCommand('ping')"`
3. **Check network connectivity** if using MongoDB Atlas
4. **Clear browser cache** and localStorage
5. **Restart both frontend and backend** servers

---

## Next Steps

After setup is complete:
1. Test signup at `http://localhost:3000/signup`
2. Test login at `http://localhost:3000/login`
3. Try scanning a URL on the dashboard
4. Check scan history (requires authentication)

Enjoy your MongoDB-powered vulnerability scanner!
