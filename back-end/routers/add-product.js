const express = require('express')
const Product = require('../models/product')
const router = express.Router() 

router.post("/" , (req,res)=>{
    const newProduct  = new Product({   
        id:req.body.id,
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,  
        image:req.body.image,
        rating:req.body.rating,
        category:req.body.category 
    }) 

    newProduct.save()
    res.send(newProduct)
})
 
router.post("/:id" , (req,res)=>{
    const id  = req.params.id
    const newProduct  = new Product({
        id:id,
        title:req.body.title,
        price:req.body.price,
        image:req.body.image,
        description:req.body.description,
        rating:req.body.rating,
        category:req.body.category 
    }) 

    newProduct.save()
    res.send(newProduct)
})





module.exports = router