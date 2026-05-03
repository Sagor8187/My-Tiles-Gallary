import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 sm:px-6 lg:px-8">

      {/* Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8">

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mt-2 mb-6 sm:mb-8 text-sm sm:text-base">
          Login to{" "}
          <span className="font-bold">
            <span className="text-xl sm:text-2xl text-purple-500">Elite</span>{" "}
            Tiles
          </span>
        </p>

        {/* Email */}
        <div className="mb-4 sm:mb-5">
          <label className="text-xs sm:text-sm text-gray-200">Email</label>
          <div className="relative mt-1">
            <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg sm:text-xl" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-5 sm:mb-6">
          <label className="text-xs sm:text-sm text-gray-200">Password</label>
          <div className="relative mt-1">
            <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg sm:text-xl" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition text-sm sm:text-base">
          <FaSignInAlt />
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-5 sm:my-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="px-3 text-gray-300 text-xs sm:text-sm">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-3 py-2.5 sm:py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition text-sm sm:text-base">
          <FcGoogle className="text-xl sm:text-2xl" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-300 mt-5 sm:mt-6 text-xs sm:text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}