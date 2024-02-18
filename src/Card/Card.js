import React from 'react';

const Card = (props) => {
    

    return (
        <div className="card">
            
            <img src={props.imgUrl} alt={props.alt || 'Image'} />
            {props.trending &&<span className="tag">Trending</span>}
            {/* {props.newAdded && <span className="tag">Newly Added</span>} */}
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    )
};

export default Card;
 