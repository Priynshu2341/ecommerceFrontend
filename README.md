# 🛒 E-Commerce Frontend (React)

A production-ready e-commerce frontend built using React, focused on performance, scalable state management, and seamless user experience.

🔗 **Live Demo:** https://whimsical-valkyrie-77e952.netlify.app/  
🔗 **Backend Repo:** https://github.com/Priynshu2341/Ecommerce-Backend  

---

## 🚀 Features

- 🔐 JWT Authentication (Access + Refresh Token)
- 🔄 Automatic token refresh using Axios interceptors
- 🛍️ Product listing with **infinite scroll pagination**
- 🔍 Search & filtering with URL query synchronization
- 🛒 Cart management with global state (Redux Toolkit)
- ⚡ Optimized API calls to reduce redundant requests
- ⏳ Loading states & smooth UX handling
- 📱 Responsive UI design

---

## 🧠 Tech Stack

- **React** (Hooks, Component Architecture)
- **Redux Toolkit** (Global State Management)
- **React Router** (Routing & Query Params)
- **Axios** (API Integration)
- **CSS** (Flexbox, Grid, Responsive Design)

---

## ⚙️ Architecture Overview

- Modular component-based structure
- Centralized API handling using Axios
- Global state managed using Redux slices
- Async operations handled with `createAsyncThunk`
- URL-driven state (pagination & search)

---

## 🔐 Authentication Flow

- Login returns **access + refresh token**
- Access token stored and attached to API requests
- Axios interceptor handles:
  - Expired token (401)
  - Calls refresh API
  - Retries failed request automatically

---

## 📦 Installation & Setup

```bash
git clone https://github.com/Priynshu2341/ecommerceFrontend.git
cd ecommerceFrontend
npm install
npm run dev