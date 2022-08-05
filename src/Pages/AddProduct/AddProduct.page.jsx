import React ,{useState}from "react";
import {useNavigate} from "react-router-dom"
import ProductEditSchema from "../../Components/ProductEditSchema/ProductEditSchema.component";

function AddProduct() {
    const navigate= useNavigate()
    const [product, setProduct]=useState({
        Image:"",
        Title:"",
        Description:"",
        Price:"",
        Category:"electronic",
        Rating:{
            Rate:null,
            Count:null
        }
    })


    const handleSave=()=>{
        product.Rating.Rate=(Math.random()*5).toFixed(1)
        product.Rating.Count=Math.floor(Math.random()*1000)

        fetch("http://localhost:3002/api/product")
        .then(i=>i.json())
        .then(productsList=>{
            let newProduct = {
                id:productsList.length+1,
                title:product.Title,
                price:product.Price,
                image:product.Image,
                description:product.Description,
                rating:{
                    rate: product.Rating.Rate,
                    count:product.Rating.Count,
                },
                category:product.Category 
            }
            console.log(newProduct);
            console.log(product);

            fetch(`http://localhost:3002/api/add-product/${newProduct.id}`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newProduct),
            })

            const userloginId = JSON.parse(document.cookie.split(":")[1].split(',')[0]);
            fetch(`http://localhost:3002/api/user/${userloginId}`)
            .then(i=>i.json())
            .then(user=>{
                fetch(`http://localhost:3002/api/product`)
                .then(i=>i.json())
                .then(prods=>{
                    let copyOfProducts = [...user.products.items]
                    copyOfProducts.push({productId:prods[prods.length-1]._id})
                    user.products.items = copyOfProducts
                    
                    fetch(`http://localhost:3002/api/user/${userloginId}` , {
                        method: "Put",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(user),
                    })
                })
            })
            
        })
        navigate("/product-manager")
    }

    function handleChange(params) {
        const value = params.target.value;
        const name = params.target.className.split(" ")[1];
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    
    return (
        <div style={{marginTop:"5em"}}>
            <h1>Give us some information about your product</h1>
            <ProductEditSchema handleChange={handleChange} handleSave={handleSave} product={product}/>
        </div>
    );
}

export default AddProduct;
