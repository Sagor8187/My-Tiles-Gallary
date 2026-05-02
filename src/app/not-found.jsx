"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">

      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-8xl font-bold text-purple-600"
      >
        404
      </motion.h1>

      {/* Floating text */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-semibold mt-4"
      >
        Page Not Found 😢
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 mt-2 max-w-md"
      >
        Looks like you are lost in space. The page you are looking for doesn't exist.
      </motion.p>

      {/* Button animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href="/"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Go Home
        </Link>
      </motion.div>

      {/* Floating circles background */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>

    </div>
  );
}