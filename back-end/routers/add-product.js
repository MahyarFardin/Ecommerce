const express = require('express')
const Product = require('../models/product')
const router = express.Router()



router.post("/" , (req,res)=>{
    const newProduct  = new Product({
        productId:req.body.productId,
        title:req.body.title,
        price:req.body.price
    }) 

    newProduct.save()
    res.send(newProduct)
})

router.post("/:id" , (req,res)=>{
    const id  = req.params.id
    const newProduct  = new Product({
        productId:id,
        title:req.body.title,
        price:req.body.price
    }) 

    newProduct.save()
    res.send(newProduct)
})





module.exports = router