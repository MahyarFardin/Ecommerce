const express = require('express')
const Product = require('../models/product')
const router = express.Router() 

router.post("/" ,async (req,res)=>{
    try {
        const newProduct  =new Product({   
            id:req.body.id,
            title:req.body.title,
            price:req.body.price,
            description:req.body.description,  
            image:req.body.image,
            rating:req.body.rating,
            category:req.body.category 
        }) 
    
        await newProduct.save()
        res.status(201).send(newProduct)

    } catch (e) {
        throw new Error(e)
    }

})
 
router.post("/:id" ,async  (req,res)=>{
    const id  = req.params.id
    try {
        const newProduct  = new Product({
            id:id,
            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description,
            rating:req.body.rating,
            category:req.body.category 
        }) 
    
        await newProduct.save()
        res.status(201).send(newProduct)
    } catch (e) {
        throw new Error(e)
    }

})





module.exports = router