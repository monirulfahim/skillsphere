"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>

        {/* --- Responsive Navbar --- */}
        <nav className="bg-white shadow-md sticky top-0 z-50 p-7">
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-600">
              Skill<span className="text-blue-900">Sphere</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/courses" className="hover:text-blue-600">Courses</Link>
              {isLoggedIn ? (
                <>
                  <Link href="/profile" className="hover:text-blue-600">My Profile</Link>
                  <button className="text-red-500 font-bold">Logout</button>
                </>
              ) : (
                <div className="flex gap-4">
                  <Link href="/login" className="px-5 py-2 bg-blue-500 text-white rounded-lg">Login</Link>
                  <Link href="/register" className="px-5 py-2 border border-blue-500 text-blue-500 rounded-lg">Register</Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {open && (
            <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-50 p-6 rounded-xl shadow-inner transition-all">
              <Link href="/" onClick={() => setOpen(false)} className="text-lg font-semibold border-b pb-2">Home</Link>
              <Link href="/courses" onClick={() => setOpen(false)} className="text-lg border-b font-semibold pb-2">Courses</Link>
              {isLoggedIn ? (
                <>
                  <Link href="/profile" onClick={() => setOpen(false)} className="text-lg border-b pb-2 font-semibold">My Profile</Link>
                  <button className="text-left text-red-500 font-bold">Logout</button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => setOpen(false)} className="text-center py-2 font-semibold bg-blue-500 text-white rounded">Login</Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="text-center font-semibold py-2 border border-blue-500 rounded">Register</Link>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* --- Main Content --- */}
        <main className="flex-grow">{children}</main>

        {/* --- Footer --- */}
        <footer className="bg-gray-800 text-white p-12 mt-0 max-[576px]:pt-14 max-[576px]:pr-4 max-[576px]:pl-4">
          <div className='flex flex-col justify-center items-center gap-4 text-center'>
            <div className="text-7xl font-semibold text-gray-300 max-[576px]:text-5xl">
              SkillSphere
            </div>
            <div className='text-[#FFFFFF]'>
              <p className='mb-6 text-gray-300'>A curated space for learning and growth. Explore new skills, build knowledge step by step, <br></br> and shape your future with confidence through meaningful courses.</p>
              <p className='text-xl'>Social Links</p>
            </div>
            <div className='flex gap-4'>
              <div>
                <img src="/images/instagram.png" alt="" />
              </div>
              <div>
                <img src="/images/facebook.png" alt="" />
              </div>
              <div>
                <img src="/images/twitter.png" alt="" />
              </div>
            </div>
          </div>
          <br />
          <hr className='pt-2 opacity-30 text-[#1A8862]' />
          <div className='flex justify-between items-center mt-3 text-[#FAFAFA] max-[576px]:flex-col max-[576px]:gap-10 max-[768px]:flex-col max-[768px]:gap-11'>
            <div>© 2026 SkillSphere. All rights reserved.</div>
            <div className='flex gap-7 max-[576px]:gap-5 max-[768px]:gap-10'>
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Cookies</div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}