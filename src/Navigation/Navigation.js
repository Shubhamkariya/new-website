import React from 'react';
import './Navigation.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
      <div className="nav-icons">
        <div className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
