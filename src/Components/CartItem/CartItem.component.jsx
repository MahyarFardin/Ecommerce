import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./CartItem.style.css";

function CartItem(props) {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3002/api/product/${props.productId}`)
            .then((rawData) => rawData.json())
            .then((json) => setItem(json));
    }, [item]);

    const handleRemove = async (event) => {
        console.log(props);
        // const userID = JSON.parse(document.cookie.split(',')[0].split(':')[1])
        // await fetch(`http://localhost:3002/api/users/${userID}`)
        // .then(i=>console.log(i))
    
    };
    

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
                <RiDeleteBin6Line className="bin" onClick={handleRemove} size={35} />
            </div>
        </div>
    );
}

export default CartItem;
