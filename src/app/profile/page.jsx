"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import "animate.css";
import { FaUser, FaBoxOpen, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function ProfileDashboard() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (session === undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-purple-600"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-bold">Please login first</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-slate-900 text-white">
      
      {/* 🔹 Sidebar */}
      <aside className="w-64 bg-slate-800 p-5 hidden md:block animate__animated animate__fadeInLeft">
        <h2 className="text-2xl font-bold text-purple-500 mb-6 flex items-center"><FaUser /> Profile</h2>

        <ul className="space-y-3">
          <li className="flex font-bold items-center gap-2 hover:bg-slate-700 p-2 rounded cursor-pointer transition">
            Update Information
          </li>
        
        </ul> 
        

        <button
          onClick={() => authClient.signOut()}
          className="mt-10 w-full bg-purple-600 py-2 rounded font-bold hover:bg-purple-700 transition flex items-center justify-center gap-2"
        >
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* 🔸 Main Content */}
      <div className="flex-1 p-6">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 animate__animated animate__fadeInDown">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <Link href="/" className="text-purple-400 hover:underline font-bold">
            Back to Home
          </Link>
        </div>

        {/* Profile Section */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg animate__animated animate__fadeInUp">
          
          <div className="flex items-center gap-6">
            <img
              src={user.image}
              alt="profile"
              className="w-20 h-20 rounded-full border-2 border-purple-500 hover:scale-110 transition duration-300"
            />

            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            
            <div className="bg-slate-700 p-4 rounded hover:scale-105 transition duration-300">
              <p className="text-gray-400">User ID</p>
              <p className="font-semibold">{user.id}</p>
            </div>

            <div className="bg-slate-700 p-4 rounded hover:scale-105 transition duration-300">
              <p className="text-gray-400">Email Verified</p>
              <p className={`font-semibold ${user.emailVerified ? "text-green-400" : "text-red-400"}`}>
                {user.emailVerified ? "Yes" : "No"}
              </p>
            </div>

            <div className="bg-slate-700 p-4 rounded hover:scale-105 transition duration-300">
              <p className="text-gray-400">Account Created</p>
              <p className="font-semibold">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-slate-700 p-4 rounded hover:scale-105 transition duration-300">
              <p className="text-gray-400">Last Update</p>
              <p className="font-semibold">
                {new Date(user.updatedAt).toLocaleDateString()}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}