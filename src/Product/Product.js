// Product.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFire } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import CardContainer from '../Card/CardContainer';

const Product = () => {
  const cardsData = [
    {id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200',trending:false,newAdded:false},
    {id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200',trending:true,newAdded:false},
    {id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201',trending:false,newAdded:false},
    {id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201',trending:false,newAdded:false},
    {id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200',trending:true,newAdded:false},
    {id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199',trending:false,newAdded:false},
    {id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199',trending:true,newAdded:false},
    {id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200',trending:false,newAdded:false},
    {id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: 'https://unsplash.it/200/198',trending:true,newAdded:false},
    {id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: 'https://unsplash.it/198/199',trending:false,newAdded:false},
  ]
  return (
    <div className="product-container">
      <h1>New Launch  <FontAwesomeIcon icon={faFire} className="fire-icon" /></h1>
      
      <CardContainer cards={ cardsData } />
    </div>
  );
};

export default Product;
