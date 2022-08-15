import React, { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem.component";

function Cart() {
    const [changed, setChanged] = useState(0);
    const [items,setItems]=useState([])

    useEffect(()=>{
        const userID = JSON.parse(document.cookie.split(",")[0].split(":")[1]);
        fetch(`http://localhost:3002/api/user/${userID}`)
        .then(rawData=>rawData.json())
        .then(data=>setItems(data.cart.items))

    },[changed])
    console.log(changed);
    return <div className="cart">{
        items.map((item) => {
            return (
                <CartItem
                    key={item._id}
                    {...item}
                    handleReRender={setChanged}
                />
            );
        })
    }</div>;
}

export default Cart;
