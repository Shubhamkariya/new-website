import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = ({ imageUrls, altTexts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  return (
    <div className="banner">
      <img src={imageUrls} alt={altTexts} />
    </div>
  );
};

export default Banner;
