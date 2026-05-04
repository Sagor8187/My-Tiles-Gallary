
# 🧱 Tiles Gallery

A modern web application to showcase a beautiful collection of tiles with authentication, dynamic gallery, and user profile management.

---

## 🌐 Live Demo
https://my-tiles-gallary.vercel.app/

---

## 📌 Project Purpose

Tiles Gallery is a modern web application where users can explore, search, and view detailed information about different types of tiles.  
It includes authentication, protected routes, profile management, and a dynamic gallery system.

---

## ✨ Key Features

1. 🖼️ **Dynamic Tiles Gallery** – Displays a visually appealing tiles image gallery  
2. 🔍 **Search Functionality** – Easily search tiles by title  
3. 👤 **User Authentication** – Secure login and registration using Better Auth  
4. 📦 **Product Details Page** – View detailed information for each tile  
5. ⚡ **Fast & Responsive UI** – Fully responsive design using Tailwind CSS  
6. 🎞️ **Smooth Animations** – Enhanced UI with Framer Motion and Animate.css  
7. 🔄 **Loading Skeleton** – Smooth loading experience while fetching data  
8. 📱 **Mobile Friendly** – Optimized for all screen sizes and devices  
9. 🔔 **Toast Notifications** – Instant feedback for user actions  
10.🧩 **Modern UI Components** – Clean and reusable components using HeroUI and DaisyUI  

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
1.@better-auth/mongo-adapter – Adapter for integrating authentication with MongoDB
2.better-auth – Authentication system for handling user login and sessions
3.mongodb – NoSQL database for storing application data
4.@heroui/react – Modern UI component library for React
5.@heroui/styles – Styling utilities for HeroUI components
6.daisyUI – Tailwind CSS-based component library for faster UI development
7.tailwindcss – Utility-first CSS framework for designing responsive layouts
8.framer-motion – Library for creating smooth animations and transitions
9.animate.css – Pre-built CSS animations
10.swiper – Powerful slider/carousel library
11.react-fast-marquee – Lightweight marquee (scrolling text) component
12.react-hook-form – Efficient form handling and validation
13.react-icons – Popular icon library (FontAwesome, etc.)
14.@gravity-ui/icons – Additional modern icon set
15.react-toastify – Toast notifications for user feedback
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