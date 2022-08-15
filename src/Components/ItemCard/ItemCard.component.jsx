import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./ItemCard.style.css";

function ItemCard(props) {

    const handleRemove = () => {
        // todo 
        // ths is product id ==> props.item._id
        // remove product
        props.removeHandler(prev=>!prev)
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
