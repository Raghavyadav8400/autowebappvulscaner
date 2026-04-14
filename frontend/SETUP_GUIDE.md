# 🎨 Frontend Setup Guide

## Quick Start

### Step 1: Open Terminal in Frontend Folder
```bash
cd c:\Users\raghav yadav\Desktop\autowebappvulscaner\frontend
```

### Step 2: Install Dependencies (if not already done)
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

You should see:
```
▲ Next.js
  ✓ Compiled successfully
  ➜ Local:   http://localhost:3000
```

---

## ✨ Features

- ✅ Professional light theme (no dark mode)
- ✅ Scrollable home page with:
  - Vulnerability scanner form
  - How it works guide
  - Features showcase
  - Benefits section
  - Call-to-action
  - Scan results dashboard with pie chart
- ✅ All pages styled and professional:
  - `/` - Home/Scan dashboard
  - `/login` - Login page
  - `/signup` - Sign up page
  - `/about_us` - About page
  - `/contact` - Contact page
  - `/pricing` - Pricing page
  - `/topten_vulnerability` - OWASP Top 10

---

## 🔧 Important Notes

1. **Backend Must Be Running**
   - Start backend on port 5000 FIRST
   - Then start frontend on port 3000
   - Frontend will call backend API at `http://localhost:5000/api/scan`

2. **Common Issues**
   - Port 3000 already in use? Kill the process or use different port: `npm run dev -- -p 3001`
   - Weird styling? Clear cache: `Ctrl+Shift+Del` or `Cmd+Shift+Del`

3. **Development Workflow**
   - Terminal 1: `npm run dev` (backend in backend folder)
   - Terminal 2: `npm run dev` (frontend in frontend folder)
   - Open browser: http://localhost:3000

---

## 📱 Mobile Responsive

The app is fully responsive for:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

---

Done! 🚀 The app should now work perfectly!
