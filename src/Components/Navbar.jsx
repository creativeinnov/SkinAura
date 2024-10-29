// src/Navbar.jsx
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css"; // Import a CSS file for styling the navbar
import logo from "../assets/logo.png"; 
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [user, setUser] = useState(null); // State to store user information
  const [error, setError] = useState(null); // State to store error messages
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar toggle

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen); // Toggle the navbar state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        <span className={`line ${isNavOpen ? 'open' : ''}`}></span>
        <span className={`line ${isNavOpen ? 'open' : ''}`}></span>
        <span className={`line ${isNavOpen ? 'open' : ''}`}></span>
      </div>
      <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="google-login-item">
          {!user ? (
            <GoogleLogin
              onSuccess={credentialResponse => {
                const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                setUser(credentialResponseDecoded); // Update user state
                console.log(credentialResponseDecoded);
              }}
              onError={() => {
                setError('Login Failed'); // Update error state
                console.log('Login Failed');
              }}
            />
          ) : (
            <button className="signed-in-button">Signed in as {user.name}</button> // Custom button for signed-in user
          )}
          {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
