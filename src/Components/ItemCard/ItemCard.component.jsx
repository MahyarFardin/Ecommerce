import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./ItemCard.style.css";

function ItemCard(props) {
    const handleRemove = async () => {
        const productID = props.item._id
        const userID = JSON.parse(document.cookie.split(",")[0].split(":")[1]);
        await fetch("http://localhost:3002/api/user/"+userID)
        .then((i) => i.json())
        .then(async (user) => {
            const index = user.products.items.findIndex((prod) => {
                return prod.productId === productID;
            });
            user.products.items.splice(index, 1);
            await fetch(`http://localhost:3002/api/user/${userID}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user),
            });
            await fetch(`http://localhost:3002/api/product/${productID}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user),
            })
            
            alert("Item removed successfully")
            window.location.reload();
        });
    };
    
    return (
        <div className="card">
            <img src={props.item.image} alt={props.item.title} />
            <div className="texts">
                <h5>{props.item.price + " $"}</h5>
                <span>{`${props.item.rating.rate} (${props.item.rating.count})`}</span>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                {props.kind === "pm" && (
                    <RiDeleteBin6Line
                        className="bin"
                        onClick={handleRemove}
                        size={35}
                        style={{marginLeft:"20px"}}
                    />
                )}
                <p>{props.item.title}</p>
            </div>
            <Link to={"/product/" + props.item.id}>
                <button className="item-button">See the Item</button>
            </Link>
        </div>
    );
}

export default ItemCard;
