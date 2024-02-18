import React from 'react';
import './Mens.css'; // Import your CSS file for styling

const Mens = () => {
    const data = [
        { id: 1,
                imgUrl: 'https://unsplash.it/200/200',
             content: 'Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum.', name: 'John Dean' },
        { id: 2,
            imgUrl: 'https://unsplash.it/200/200',
            content: 'Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum.', name: 'John Dean' },
       // Add more data objects as needed
      ];
      const dataRows = [
        {   id: 3,
            imgUrl: 'https://unsplash.it/200/200',
            content: 'Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum.', name: 'John Dean' },
        {   id: 4,
            imgUrl: 'https://unsplash.it/200/200',
            content: 'Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum.', name: 'John Dean' },
        {   id: 5, 
            imgUrl: 'https://unsplash.it/200/200',
            content: 'Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum.', name: 'John Dean' },
       // Add more data objects as needed
      ];
  return (

    <div>
        <div className="card-container" >
            {data.map(item => (
            <div key={item.id} className="card" style={{ backgroundImage: `url(${item.imgUrl})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                <p>{item.content}</p>
                <h4>{item.name}</h4>
                </div>
            </div>
            ))}
        </div>
        <div className="card-container">
            {dataRows.map(item => (
            <div key={item.id} className="card" style={{ backgroundImage: `url(${item.imgUrl})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <p>{item.content}</p>
                    <h4>{item.name}</h4>
                </div>
            </div>
            ))}
        </div>
    </div>
   
        
  );
};

export default Mens;
