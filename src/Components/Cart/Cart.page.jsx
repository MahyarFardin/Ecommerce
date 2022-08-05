import React from "react";
import CartItem from "../CartItem/CartItem.component";

function Cart({ items }) {
    return (
        <div className="cart">
            {items.map((item) => {
                return <CartItem key={item._id} {...item} />;
            })}
        </div>
    );
}

export default Cart;
