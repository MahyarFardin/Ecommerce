import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../../Components/AddToCart/AddToCart.component";
import CommentsComponent from "../../Components/Comentscomponent/CommentsComponent.component";
import "./ProductPage.style.css";

function ProductPage() {
    const params = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/api/product")
            .then((res) => res.json())
            .then((json) => {
                let target = json.find((i) => {
                    return i.id == params.id;
                });
                setItem(target);
            });
    }, []);

    return (
        <div>
            <div className="item-container">
                <div className="item-image">
                    <img src={item.image} alt="" />
                </div>
                <div className="description">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    {document.cookie && (
                        <AddToCart price={item.price} id={params.id} />
                    )}
                </div>
            </div>
            {document.cookie && (
                <div>
                    <CommentsComponent />
                </div>
            )}
        </div>
    );
}

export default ProductPage;
