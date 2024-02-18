import React from 'react';
import './Mens.css'; // Import your CSS file for styling

const Mens = () => {
    const data = [
        { id: 1, content: 'Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum.', name: 'John Dean' },
        { id: 2, content: 'Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is like Aldus PageMaker including versions of Lorem Ipsum.', name: 'John Dean' },
        // Add more data objects as needed
      ];
  return (
    // <div>
    //     <div class="test">
    //         <div class="card">
    //         <div class="container">
    //         <p>
    //         Lorem Ipsum ie like Aldus Pa
    //         geMaker including versions of Lorem Ipsum.
    //         </p>
    //             <h4>john dean</h4>
    //         </div>
    //         </div>


    //     <div class="card">
    //         <div class="container">
    //         <p>
    //         Lorem Ipsum ie like Aldus Pa
    //         geMaker including versions of Lorem Ipsum.
    //         Lorem Ipsum ie like Aldus Pa
    //         geMaker including versions of Lorem Ipsum.
    //         </p>
    //             <h4>john dean</h4>
    //         </div>
    //         </div>
    //     </div>

    //     <div className='Second'>
    //         <div class="cardSecond">
    //             <div class="container">
    //             <p>
    //             Lorem Ipsum ie like Aldus Pa
    //             geMaker including versions of Lorem Ipsum.
    //             Lorem Ipsum ie like Aldus Pa
    //             geMaker including versions of Lorem Ipsum.
    //             </p>
    //                 <h4>john dean</h4>
    //             </div>
    //     </div>
    //     <div class="cardSecond">
    //             <div class="container">
    //             <p>
    //             Lorem Ipsum ie like Aldus Pa
    //             geMaker including versions of Lorem Ipsum.
    //             Lorem Ipsum ie like Aldus Pa
    //             geMaker including versions of Lorem Ipsum.
    //             </p>
    //                 <h4>john dean</h4>
    //             </div>
    //     </div>
    //     <div class="cardSecond">
    //             <div class="container">
    //             <p>
    //             Lorem Ipsum ie like Aldus Pa
    //             geMaker including versions of Lorem Ipsum.
    //             Lorem Ipsum ie like Aldus Pa
    //             geMaker including versions of Lorem Ipsum.
    //             </p>
    //                 <h4>john dean</h4>
    //             </div>
    //     </div>

    //    </div>
    
    // </div>
    <div>
    {data.map(item => (
      <div key={item.id} className="card">
        <div className="container">
          <p>{item.content}</p>
          <h4>{item.name}</h4>
        </div>
      </div>
    ))}
  </div>
        
  );
};

export default Mens;
