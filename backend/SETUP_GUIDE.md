# 🔧 Backend Setup & Troubleshooting Guide

## 500 Internal Server Error - Fix Guide

The 500 error means the backend server is either **not running** or **encountering an error**.

### ✅ Quick Fix (3 Steps)

#### Step 1: Open Terminal in Backend Folder
```bash
cd c:\Users\raghav yadav\Desktop\autowebappvulscaner\backend
```

#### Step 2: Install Dependencies
```bash
npm install
```
This will install:
- ✅ bcryptjs (password hashing)
- ✅ jsonwebtoken (JWT tokens)
- ✅ express & cors (already installed)

#### Step 3: Start the Backend
```bash
npm run dev
```

You should see:
```
Initializing backend...
✅ Backend listening on http://localhost:5000
```

---

## 🐛 Troubleshooting

### Issue: "npm command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Still getting 500 error after `npm install`?
**Solution:** Kill the old backend process and restart:
```bash
npm install
npm run dev
```

### Issue: Port 5000 already in use?
**Solution:** Kill the process using port 5000:
```bash
# Windows PowerShell
Get-Process | Where-Object {$_.Port -eq 5000} | Stop-Process

# Or run on different port:
PORT=5001 npm run dev
```

### Issue: "Error: ENOENT: no such file or directory"
**Solution:** Make sure you're in the backend folder:
```bash
cd backend
npm install
```

---

## ✨ Test Backend is Working

Run this command in another terminal:
```bash
node test-backend.js
```

You should see:
```
✓ Backend is running!
Status: 200
Response: {"status":"ok","message":"Backend is running"}
```

---

## 📋 Backend Features Ready

After successful startup:
- ✅ `/api/health` - Health check endpoint
- ✅ `/api/scan` - Vulnerability scanning (POST with URL)
- ✅ `/api/auth/signup` - Register new account
- ✅ `/api/auth/login` - Login to account
- ✅ `/api/auth/scans` - Get user's scan history (requires token)

---

## 🚀 Next: Start Frontend

In a NEW terminal, while backend is running:
```bash
cd c:\Users\raghav yadav\Desktop\autowebappvulscaner\frontend
npm run dev
```

Frontend will run on: **http://localhost:3000**
Backend will run on: **http://localhost:5000**

---

## 📊 Architecture After Setup

```
Frontend (Next.js)
  ↓ API Calls ↓
Backend (Express)
  ↓ Scans URLs, Analyzes ↓
Returns Findings (JSON)
```

Everything should work now! 🎉
