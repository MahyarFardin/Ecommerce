import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CartItem.style.css";

function CartItem(props) {
    const [item, setItem] = useState({});
    const refAr = useRef();

    useEffect(() => {
        fetch(`http://localhost:3002/api/product/${props.productId}`)
            .then((rawData) => rawData.json())
            .then((json) => setItem(json));
    }, []);

    return (
        <div className="card-cart">
            <div className="cont">
                <img className="cart-image" src={item.image} />

                <Link to={"/product/" + item.id}>
                    <button className="item-button">See the Item</button>
                </Link>
            </div>
            <div>
                <h3>{item.title}</h3>
            </div>
            <div>
                <h3>Price:{item.price}</h3>
                <hr />
                <h3>Quantity: {props.quantity}</h3>
                <hr />
                <h3>Total of {props.quantity * item.price} $</h3>
            </div>
        </div>
    );
}

export default CartItem;