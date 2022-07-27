import React, { useEffect, useState } from 'react';
import ItemCard from '../../Components/ItemCard/ItemCard.component';
import MyInput from "../../Components/MyInput/MyInput.component"
import "./MainShopPage.style.css"

let num = 0
function MainPage() {
    const [container, setContainer] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setContainer(json)
                if (num <1) {
                        addProductsToDataBase(json , num)
                    // console.log('nima');
                    num++
                }
            })
    }, [])
    function addProductsToDataBase(products,  num){
        products.forEach(product => {
            let newProd = {
                productId:product.id,   
                title:product.title,
                price:product.price
            }
            fetch(`http://localhost:3002/api/add-product` , {
            method:'POST' , 
            headers:{"Content-type":'application/json'},
            body:JSON.stringify(newProd)
        })
    });
        

    }
    const handleChange = (props) => {
        setSearch(props.target.value);
    }

    const filterhandler = container.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    const cards =
        (search === "") ? container.map(item => <ItemCard key={item.id} {...{ item }} />) :
            filterhandler.map(item => <ItemCard key={item.id} {...{ item }} />)

    return (
        <div className='main-container-shop'>
            <MyInput {...{
                name: "search",
                type: "text",
                placeholder: "Search here",
                value: search,
                onChange: handleChange
            }} />
            <div className='main-shop'>
                {cards}
            </div>
        </div>
    );
}

export default MainPage;