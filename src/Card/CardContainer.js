import React from 'react';
import './CardContainer.css'; // Import your CSS file
import Card from './Card';


  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
            imgUrl={ card.imgUrl }
            trending={card.trending}
            newAdded={card.newAdded}
             />
        ))
      }
    </div>
  );
  
  export default CardContainer;
  


