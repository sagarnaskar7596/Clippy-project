import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/clippy_icon.png" alt="clippy" className="h-8" />
            <span className="text-yellow-500 text-2xl font-bold tracking-wide">
              Clippy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-yellow-500 transition-colors duration-200">
              Home
            </Link>
            <Link to="/create" className="hover:text-yellow-500 transition-colors duration-200">
              Create
            </Link>
          </div>

          {/* User Avatar */}
          <div className="hidden md:flex">
            <Link
              to="/account"
              className="w-9 h-9 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold hover:scale-105 transition transform duration-200"
            >
              {user.name.slice(0, 1).toUpperCase()}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-inner transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-start gap-4 px-6 py-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-yellow-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-gray-700 hover:text-yellow-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Create
            </Link>
            <Link
              to="/account"
              className="text-gray-700 hover:text-yellow-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
