import React, { useEffect, useReducer, useState } from "react";
import {
    BsFillArrowLeftSquareFill,
    BsFillArrowRightSquareFill,
} from "react-icons/bs";
import MyInput from "../../Components/MyInput/MyInput.component";
import ItemCard from "../../Components/ItemCard/ItemCard.component";
import "./MainShopPage.style.css";

function MainPage() {
    const [container, setContainer] = useState([]);
    const [search, setSearch] = useState("");
    const [state, dispach] = useReducer(reducer, { count: 1 });

    function reducer(state, action) {
        switch (action.type) {
            case "left":
                return { count: state.count - 1 };
            case "right":
                return { count: state.count + 1 };
        }
    }

    useEffect(() => {
        fetch("http://localhost:3002/api/product")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setContainer(json);
            });
    }, []);

    //     fetch('http://fakestoreapi.com/products')
    //         .then(res =>{
    //             return res.json()
    //         } )
    //         .then(json => {
    //             setContainer(json)
    //             addProductsToDataBase(json)
    //         })
    //     }, [])

    // function addProductsToDataBase(products){
    //     products.forEach(async product => {
    //         let newProd = {
    //             id:product.id,
    //             title:product.title,
    //             price:product.price,
    //             category:product.category,
    //             description:product.description,
    //             image:product.image,
    //             rating:{
    //                 rate:product.rating.rate,
    //                 count:product.rating.count
    //             }
    //         }
    //         // console.log(product);
    //         // console.log(newProd);
    //         await fetch(`http://localhost:3002/api/add-product` , {
    //         method:'POST' ,
    //         headers:{"Content-type":'application/json'},
    //         body:JSON.stringify(newProd)
    //     })
    // });
    // }
    const handleChange = (props) => {
        setSearch(props.target.value);
    };

    const filterhandler = container.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const cards =
        search === ""
            ? container.map((item, idx) => {
                  if (
                      idx < 12 * state.count &&
                      idx > 12 * (state.count - 1) - 1
                  )
                      return <ItemCard kind={"s"} key={item.id} {...{ item }} />;
              })
            : filterhandler.map((item) => (
                  <ItemCard kind={"s"} key={item.id} {...{ item }} />
              ));

    return (
        <div className="main-container-shop">
            <MyInput
                {...{
                    name: "search",
                    type: "text",
                    placeholder: "Search here",
                    value: search,
                    onChange: handleChange,
                }}
            />
            <div className="main-shop">{cards}</div>
            <div className="pages">
                <BsFillArrowLeftSquareFill
                    onClick={() => dispach({ type: "left" })}
                />
                <span className="page-number">{state.count}</span>
                <BsFillArrowRightSquareFill
                    onClick={() => dispach({ type: "right" })}
                />
            </div>
        </div>
    );
}

export default MainPage;
