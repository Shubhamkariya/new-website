import React from 'react';
import './Navigation.css'; // Import your CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
