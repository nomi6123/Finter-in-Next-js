"use client";
import { useState } from "react";
import { GoPersonFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      // Simulate successful login
      setTimeout(() => {
        setIsLoginOpen(false);
        setEmail("");
        setPassword("");
      }, 500);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-fuchsia-800 to-gray-900 text-white sticky top-0 z-50">
        <div className="w-full max-w-[1300px] mx-auto flex justify-between items-center py-4 px-5">
          {/* Logo */}
          <Link href="#" className="font-bold text-[28px] hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            Finter
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-10 text-[16px] uppercase items-center">
            {["home", "about", "services", "team", "contact"].map((item) => (
              <Link key={item} href={`#${item}`} className="relative group hover:text-blue-400 transition-colors duration-300">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {/* Login Button */}
            <button onClick={() => setIsLoginOpen(true)} className="flex items-center gap-2 group hover:text-blue-400 transition-colors duration-300">
              <GoPersonFill aria-hidden="true" />
              <span className="relative cursor-pointer">
                Login
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <FaSearch className="hover:text-blue-400 transition-colors duration-300 cursor-pointer" aria-label="Search" />
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-[28px]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Navigation Menu">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
{isMenuOpen && (
  <nav className="lg:hidden flex flex-col gap-4 text-center bg-gradient-to-r from-black via-fuchsia-800 to-gray-900 py-4">
    {["home", "about", "services", "team", "contact"].map((item) => (
      <Link 
        key={item} 
        href={`#${item}`} 
        className="relative group hover:text-blue-400 transition-colors duration-300"
        onClick={() => setIsMenuOpen(false)} // Close menu on click
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    ))}
    <button 
      onClick={() => {
        setIsLoginOpen(true);
        setIsMenuOpen(false); // Close menu when clicking login
      }} 
      className="flex items-center justify-center gap-2 group hover:text-blue-400 transition-colors duration-300"
    >
      <GoPersonFill aria-hidden="true" />
      <span className="relative">Login</span>
    </button>
  </nav>
)}

      </header>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-black via-fuchsia-800 to-gray-900 bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-gradient-to-r from-black via-fuchsia-800 to-gray-900 p-8 rounded-lg shadow-lg max-w-sm w-full relative animate-fadeIn">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-300 text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 border rounded mb-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 border rounded mb-4 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button type="submit" className="bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition-all duration-300">
                Login
              </button>
              <button onClick={() => setIsLoginOpen(false)} className="mt-3 text-white hover:text-gray-200 transition-colors text-center">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
