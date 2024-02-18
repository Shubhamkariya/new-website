import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = ({ imageUrls, altTexts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the image every 3 seconds
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [imageUrls]);

  return (
    <div className="banner">
      <img src={imageUrls[currentImageIndex]} alt={altTexts[currentImageIndex]} />
    </div>
  );
};

export default Banner;
