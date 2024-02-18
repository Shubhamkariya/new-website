import React, { useState, useEffect } from 'react';
import NavBar from './Navigation/Navigation';
import Product from './Product/Product';
import Banner from './Banner/Banner';
import ReviewContainer from './ReviewsCount/Review';
import Mens from './MensJewellery/Mens';
import { ColorExtractor } from 'react-color-extractor';
import ImageColor from './Test/ImageColor';

const App = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [backgroundGradient, setBackgroundGradient] = useState();

  const handleColorsChange = (colors) => {
    // Remove duplicates using Set
    const uniqueColors = [...new Set(colors)];
  
    // Sort unique colors based on brightness (luminance)
    const sortedColors = uniqueColors.sort((a, b) => getBrightness(b) - getBrightness(a));
  
    // Threshold value to determine dark and light colors
    const brightnessThreshold = 128; // You can adjust this value based on your preference
  
    // Separate colors into dark and light formats
    const darkColors = sortedColors.filter(color => getBrightness(color) < brightnessThreshold);
    const lightColors = sortedColors.filter(color => getBrightness(color) >= brightnessThreshold);
  
    // Select one darker and one lighter color
    const selectedDarkColor = darkColors[0] || "#000000"; // Fallback to black if no dark colors
    const selectedLightColor = lightColors[0] || "#FFFFFF"; // Fallback to white if no light colors
  
    // You can set state or perform other actions with selectedDarkColor and selectedLightColor
    console.log('Selected Dark Color:', selectedDarkColor);
    console.log('Selected Light Color:', selectedLightColor);
  
    // Create a linear gradient based on the selected colors
    const linearGradient = `linear-gradient(to right,${selectedDarkColor}, ${selectedLightColor})`;
    setBackgroundGradient(linearGradient);
  };
  
  const getBrightness = (color) => {
    // Convert color to RGB values
    const [r, g, b] = hexToRgb(color);
  
    // Calculate brightness using a common formula
    return (r * 299 + g * 587 + b * 114) / 1000;
  };
  
  const hexToRgb = (hex) => {
    // Remove '#' and convert to RGB
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };
  

  const altTexts = ['Image 1', 'Image 2', 'Image 3'];
  const imageUrls = [
    'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7676308/pexels-photo-7676308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // Add more image URLs as needed
  ];


  return (
    <div style={{ background: backgroundGradient, transition: 'background 0.5s' }}>
      <NavBar />
      <ImageColor imageUrls={imageUrls} altTexts={altTexts} onColorsChange={handleColorsChange} />

      {/* {selectedColors.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h2>Selected Colors in Parent:</h2>
          <div style={{ display: 'flex' }}>
            {selectedColors.map((color, id) => (
              <div
                key={id}
                style={{
                  backgroundColor: color,
                  width: 100,
                  height: 100,
                  marginRight: 10
                }}
              >

              </div>
            ))}
          </div>
        </div>
      )} */}

    
      
      <Product />
      <ReviewContainer />
      <Mens />
    </div>
  );
};

export default App;
