import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/clippy_icon.png"
                alt="clippy"
                className="h-8 mr-2"
              />
              <span className="text-yellow-500 text-xl font-bold">Clippy</span>
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/create"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Create
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Right side - User Avatar */}
          <div className="hidden md:flex items-center">
            <Link
              to="/account"
              className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold hover:bg-gray-400 transition-colors"
            >
              {user.name.slice(0, 1)}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-6 absolute top-16 left-0 w-full flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Create
            </Link>
            <Link
              to="/account"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
