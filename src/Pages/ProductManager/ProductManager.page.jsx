import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../Components/ItemCard/ItemCard.component"
import "./ProductManager.style.css";

function ProductManager({}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const userloginId = JSON.parse(document.cookie.split(":")[1].split(',')[0]);
        

        fetch(`http://localhost:3002/api/user/${userloginId}`)
            .then((rawData) => rawData.json())
            .then((json) => {
                json.products.items.forEach(item=>{
                    fetch(`http://localhost:3002/api/product/${item.productId}`)
                    .then(i=>i.json())
                    .then(prod=>{
                        setProducts(prev=>[
                            ...prev,
                            prod
                        ])
                    })
                    
                })
            })
        }, []);

        return (
            <div className="container-pm-main">
            <h1>Your products</h1>
            <p>These are your products that you have served to our cutomers</p>
            <p>Edit them by clicking on the see Item</p>

            <div className="pm-container">
                <Link
                    to="/add-product"
                    style={{ textDecoration: "none", color: "#5F5449" }}
                >
                    <div className="dummy-card">
                        <span>Add product Here</span>
                    </div>
                </Link>
                {products.map((item) => (
                    <ItemCard key={item._id} {...{ item }} />
                ))}
            </div>
        </div>
    );
}

export default ProductManager;
