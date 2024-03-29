import React, { useRef, useState } from 'react';
import {AR} from '../AdderRemover/AR.component';
import MyButton from "../MyButton/MyButton.component"
import "./AddToCart.style.css"
function AddToCart({ price,id }) {
    const number=useRef()

    const handleSubmit = () => {
        addProdToDataBase()
        alert("added to cart")
    }
    
    async function addProdToDataBase(){
        let prod , user
            console.log(id);
                await fetch(`http://localhost:3002/api/product`)
                .then(i=>{
                    return i.json()
                })
                .then(async products=>{
                    prod = products.find(i=>{
                        return i.id == id
                    })
 
                user = JSON.parse(document.cookie.split('=')[1])
           
                await fetch(`http://localhost:3002/api/user/${user._id}`)
                .then(i=> {
                    return i.json()
                })
                .then(i=>{
                    user = i
                })

                let indexOfproduct = user.cart.items.findIndex(i=>{
                    return i.productId == prod._id.toString()
                })
                
                if (indexOfproduct >=0) {
                    user.cart.items[indexOfproduct].quantity = number.current.innerText
                } else {
                    user.cart.items.push({
                        productId:prod._id,
                        quantity:number.current.innerText
                    })
                }
                // console.log(user);
                await fetch(`http://localhost:3002/api/user/${user._id}`,{
                    method:"PUT" , 
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify(user)
                })
                .then(i=>{
                    console.log(i);
                })
            
        })
    }

    return (
        <div className="container-a-c">
            <div className='shop-part'>
                <span>{price + " $"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
            </div>
            <hr />
            <div className="cart-part">
                <AR ref={number}/>
                
                <MyButton
                    name={"Add to cart"}
                    func={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddToCart;