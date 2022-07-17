import React from 'react';
import "./ItemCard.style.css"

function ItemCard(props) {

    function handleClick(params) {
        console.log(params);
    }
    return (
        <div onClick={handleClick} className='card'>
            <img src={props.item.image} alt={props.item.title} />
            <div className='texts'>
                <h5>{props.item.price + " $"}</h5>
                <span>{`${props.item.rating.rate} (${props.item.rating.count})`}</span>
            </div>
            <p>{props.item.title}</p>
            <button className='item-button'>See the Item</button>
        </div>
    );
}

export default ItemCard;