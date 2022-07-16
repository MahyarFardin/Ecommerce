import React from 'react';
import "./ItemCard.style.css"

function ItemCard(props) {
    return (
        <div className='card'>
            <img src={props.item.image} alt={props.item.title} />
            <div className='texts'>
                <h5>{props.item.price}</h5>
                <span>{`${props.item.rating.rate} (${props.item.rating.rate})`}</span>
                <p>{props.item.title}</p>
            </div>
        </div>
    );
}

export default ItemCard;