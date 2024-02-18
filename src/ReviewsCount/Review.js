import React, { useState, useEffect } from 'react';
import './Review.css'; // Import your CSS file for styling

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFire } from '@fortawesome/free-solid-svg-icons';



const ReviewContainer = () => {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [reviews, setReviews] = useState(0);

  const maxCustomers = 100;
  const maxReview = 75; // Set the maximum number of reviews
  
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [
    'Amazing service! I highly recommend.',
    'The quality of products exceeded my expectations.',
    'Incredible experience with this company.',
    // Add more quotes as needed
  ];

  const nextQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (happyCustomers < maxCustomers) {
        setHappyCustomers((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the interval based on your preference

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [happyCustomers, maxCustomers]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (reviews < maxReview) {
        setReviews((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the interval based on your preference

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [reviews, maxReview]);

  return (
    <div>
    <div className="splitScreen">
        <div class="left-section">
            <center>
            <h2 className="customer">Reviews</h2>
            <p className="customer-count">{reviews} </p>
            </center>
        </div>
        <div class="right-section">
            <center>
                <h2 className="customer">Happy Customers</h2>
                <p className="customer-count">{happyCustomers}</p>
            </center>
        </div>
       
      </div>
      <center>
       <div className="quote-container">
            <blockquote className="quote">{quotes[quoteIndex]}</blockquote>
            <div className="buttons-container">
                <button onClick={prevQuote}>Previous 
                
                <FontAwesomeIcon icon="faFire" />                </button>
                <button onClick={nextQuote}>Next 
                    <FontAwesomeIcon icon="fa-solid fa fa-arrow-right" /> 
                </button>
            </div>
        </div>
    </center>
    </div>
  );
};

export default ReviewContainer;
