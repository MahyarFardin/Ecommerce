import React, { useEffect, useState } from 'react';
import ItemCard from '../../Components/ItemCard/ItemCard.component';
import "./MainShopPage.style.css"

function MainPage() {
    const [container, setContainer] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setContainer(json))
    }, [])

    return (
        <div className='main-shop'>
            {container.map(item => <ItemCard key={item.id} {...{ item }} />)}
        </div>
    );
}

export default MainPage;