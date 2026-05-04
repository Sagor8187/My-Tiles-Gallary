
# 🧱 Tiles Gallery

A modern full-stack web application to showcase a beautiful collection of tiles with authentication, dynamic gallery, and user profile management.

---

## 🌐 Live Demo
👉 https://your-live-link-here.com

---

## 📌 Project Purpose

Tiles Gallery is a modern web application where users can explore, search, and view detailed information about different types of tiles.  
It includes authentication, protected routes, profile management, and a dynamic gallery system.

---

## ✨ Key Features

### 🏠 Home Page
- Hero banner with “Discover Your Perfect Aesthetic”
- Animated marquee for latest updates
- Featured tiles section (top 4 from API)

### 🔐 Authentication System
- Email & Password Registration/Login
- Google OAuth Login
- Secure session handling using Better Auth
- Protected routes (My Profile, Tile Details)

### 🖼️ All Tiles Page
- Search tiles by title
- Dynamic data fetching from API
- Interactive tile cards with details button

### 🔍 Single Tile Details Page
- High-resolution tile preview
- Title, description, category, material
- Price and availability info

### 👤 My Profile Page
- User profile display (name, email, image)
- Update name and image feature
- Logout functionality

### ⚡ Extra Features
- Loading state handling
- Not Found page implementation
- Fully responsive UI (mobile, tablet, desktop)
- Smooth animations for better UX

---

## 🛠️ Tech Stack

- Next.js  
- Tailwind CSS  
- Better Auth  
- MongoDB 

---

## 📦 NPM Packages Used

- @better-auth/mongo-adapter  
- @gravity-ui/icons  
- @heroui/react  
- @heroui/styles  
- animate.css  
- better-auth  
- framer-motion  
- mongodb  
- react-fast-marquee  
- react-hook-form  
- react-icons  
- react-toastify  
- swiper  
- daisyui  
- tailwindcss  

---

## 🔐 Authentication Flow

- Register using Email/Password or Google
- Login using Email/Password or Google
- Redirect to Home after success
- Protected routes:
  - `/my-profile`
  - `/tile/[id]`

---

## 📱 Responsive Design

- Mobile 📱  
- Tablet 📲  
- Desktop 💻  

---

## 📂 JSON Data Structure

use json server link : 
my api https://my-tiles-server-1.onrender.com/product

data formate here...
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish",
  "image": "/images/tiles/tile_001.jpg",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}