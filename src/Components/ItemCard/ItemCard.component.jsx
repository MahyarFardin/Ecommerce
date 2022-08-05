import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.style.css";

function ItemCard(props) {
    return (
        <div className="card">
            <img src={props.item.image} alt={props.item.title} />
            <div className="texts">
                <h5>{props.item.price + " $"}</h5>
                <span>{`${props.item.rating.rate} (${props.item.rating.count})`}</span>
            </div>
            <p>{props.item.title}</p>

            <Link to={"/product/" + props.item.id}>
                <button className="item-button">See the Item</button>
            </Link>
        </div>
    );
}

export default ItemCard;
