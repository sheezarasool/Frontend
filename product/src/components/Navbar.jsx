import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Smart<span className="text-blue-600">Resume</span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex space-x-6 xl:space-x-8 text-gray-700 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Platform</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Enterprise</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Resources</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Pricing</a></li>
            </ul>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Login
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Platform
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Solutions
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Enterprise
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Resources
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Pricing
              </a>
            </div>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                Login
              </button>
              <button className="w-full bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;