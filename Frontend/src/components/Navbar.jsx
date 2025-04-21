import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
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
              {/* <Link
                to="/explore"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Explore
              </Link> */}
            </div>
          </div>

          {/* Right side - User/Actions */}
          <div className="flex items-center">
            <Link
              to="/account"
              className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold hover:bg-gray-400 transition-colors"
            >
              {user.name.slice(0,1)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;