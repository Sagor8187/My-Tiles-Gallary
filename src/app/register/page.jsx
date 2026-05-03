"use client";

import Link from "next/link";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-3">

      {/* Card */}
      <div className="mx-auto w-full max-w-sm sm:max-w-md 
      bg-white/10 backdrop-blur-xl border border-white/20 
      rounded-2xl shadow-2xl p-4 sm:p-6">

        {/* Title with Icon */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaUserPlus className="text-white text-lg" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Create Account
          </h2>
        </div>

        <p className="text-center text-gray-300 mb-5 text-xs sm:text-sm">
          Join the Tiles Gallery today
        </p>

        {/* Username */}
        <div className="mb-3">
          <label className="text-xs text-gray-200">Username</label>
          <div className="relative mt-1">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
            <input
              type="text"
              placeholder="Enter username"
              className="w-full pl-9 pr-3 py-2 rounded-lg 
              bg-white/10 text-white border border-white/20 
              focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="text-xs text-gray-200">Image URL</label>
          <div className="relative mt-1">
            <AiOutlineLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
            <input
              type="text"
              placeholder="Image link"
              className="w-full pl-9 pr-3 py-2 rounded-lg 
              bg-white/10 text-white border border-white/20 
              focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="text-xs text-gray-200">Email</label>
          <div className="relative mt-1">
            <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
            <input
              type="email"
              placeholder="Enter email"
              className="w-full pl-9 pr-3 py-2 rounded-lg 
              bg-white/10 text-white border border-white/20 
              focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-xs text-gray-200">Password</label>
          <div className="relative mt-1">
            <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full pl-9 pr-3 py-2 rounded-lg 
              bg-white/10 text-white border border-white/20 
              focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Button */}
        <button className="w-full flex items-center justify-center gap-2 
        py-2 rounded-lg bg-blue-600 hover:bg-blue-700 
        text-white text-sm font-semibold transition">
          <FaUserPlus />
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="px-2 text-gray-300 text-xs">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Google */}
        <button className="w-full flex items-center justify-center gap-2 
        py-2 rounded-lg bg-white text-black 
        text-sm font-semibold hover:bg-gray-200 transition">
          <FcGoogle />
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-4 text-xs">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}