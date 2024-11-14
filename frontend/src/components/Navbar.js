import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User/styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for controlling dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Alumni Association</Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Login dropdown */}
        <div className="dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            Login
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/login" className="dropdown-item">User Login</Link>
              <Link to="/admin-login" className="dropdown-item">Admin Login</Link>
            </div>
          )}
        </div>

        <Link to="/register">Register</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
