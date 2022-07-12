import React, { useEffect, useState } from 'react';
import "./CategoriesPage.style.css"


export default function CategoriesPage() {
    const [categories, setCategories] = useState([])

    function handleMouseOver(event) {
        event.target.style.backgroundColor="#F9E4D4"
    }

    function handleMouseLeave(event) {
        event.target.style.backgroundColor="white"
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(json => setCategories(json))
    }, [])

    return (
        <div className='category-container'>
            {categories.map(category => <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} key={Math.random()} className="category">{category}</div>)}
        </div>
    )
}