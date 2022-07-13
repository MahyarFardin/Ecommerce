import React from 'react';
import "./CarouselCard.style.css"

function CarouselCard(props) {
    return (
            <img className='carousel-card' src={props.image} alt="carousel image" />
    );
}

export default CarouselCard;