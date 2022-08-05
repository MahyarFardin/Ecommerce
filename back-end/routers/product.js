const express = require('express')
const Product = require('../models/product')
const router = express.Router()


router.get("/" , (req,res)=>{
    Product.find()
    .then(i=>{
        res.send(i)
    })
})



router.get('/:id' , (req , res)=>{
    const id = req.params.id
    Product.findById({_id:id})
    .then(i=>{
        res.send(i)
    })
})







module.exports = router