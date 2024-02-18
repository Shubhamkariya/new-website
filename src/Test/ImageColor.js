import React, { useState, useEffect } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import Banner from '../Banner/Banner';

const ImageColor = ({ imageUrls, altTexts, onColorsChange }) => {
  const [colors, setColors] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the image every 3 seconds
      setCurrentImageIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
      // Reset colors when the image changes
      setColors([]);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array to run the effect once on mount

  const renderSwatches = () => {
    return colors.map((color, id) => (
      <div
        key={id}
        // style={{
        //   backgroundColor: color,
        //   width: 100,
        //   height: 100,
        // }}
        onClick={() => handleColorClick(color)}
      >
        {/* <h1 style={{ color: 'white' }}>{color}</h1> */}
      </div>
    ));
  };

  const getColors = (extractedColors) => {
    const newColors = [...colors, ...extractedColors];
    setColors(newColors);

    if (onColorsChange) {
      // Pass the entire array of colors to the parent
      onColorsChange(newColors);
    }
  };

  const handleColorClick = (clickedColor) => {
    // Do something when a color is clicked
    console.log(`Color Clicked: ${clickedColor}`);
  };

  return (
    <div
    //   style={{
    //     backgroundColor: colors.length > 0 ? colors[0] : '#FFFFFF', // Set the background color to the first extracted color or default to white
    //   }}
    >
      <ColorExtractor getColors={getColors}>
        <img
          src={imageUrls[currentImageIndex]} // Use the current image URL based on the index
          style={{ width: 700, height: 500 }}
          alt="Color Extractor Image"
          hidden
        />
      </ColorExtractor>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {renderSwatches()}
      </div>
      <Banner imageUrls={imageUrls[currentImageIndex]} altTexts={altTexts[currentImageIndex]} />
    </div>
  );
};

export default ImageColor;
