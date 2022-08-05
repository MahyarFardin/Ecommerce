import React from 'react';
import "./CarouselCard.style.css"

function CarouselCard(props) {
    return (
        
        <div>
            <img className='carousel-card' src={props.image} alt="carousel image" />
            <div className='text'>
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
            </div>
        </div>
    );
}

export default CarouselCard;