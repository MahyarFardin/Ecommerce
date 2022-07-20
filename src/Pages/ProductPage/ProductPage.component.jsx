import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCart from '../../Components/AddToCart/AddToCart.component';
import "./ProductPage.style.css"

function ProductPage() {
    const params = useParams();
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + params.id)
            .then(res => res.json())
            .then(json => setItem(json))
    }, [])

    return (
        <div className='item-container'>
            <div className="item-image">
                <img src={item.image} alt="" />
            </div>
            <div className="description">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <AddToCart price={item.price} />
            </div>
        </div>
    );
}

export default ProductPage;