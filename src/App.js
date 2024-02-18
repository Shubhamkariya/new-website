import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import NavBar from './Navigation/Navigation';
import Product from './Product/Product';
import Banner from './Banner/Banner';
import ReviewContainer from './ReviewsCount/Review';
import Mens from './MensJewellery/Mens';

const App = () =>{
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7676308/pexels-photo-7676308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // Add more image URLs as needed
  ];
   setInterval(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000);


  const altTexts = ['Image 1', 'Image 2', 'Image 3'];
  return (
    <div >
    <div className="App">
      <NavBar />
      <Banner imageUrls={imageUrls} altTexts={altTexts} />
    </div>
      <Product/>
      <ReviewContainer />
      <Mens />
    </div>
  );
}

export default App;
