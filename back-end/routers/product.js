const express = require('express')
const Product = require('../models/product')
const router = express.Router()


router.get("/" , (req,res)=>{
    Product.find()
    .then(i=>{
        res.send(i)
    })
})



router.get('/:id' ,async (req , res)=>{
    const id = req.params.id
    try {
        const product =await  Product.findById({_id:id})
        res.send(product)
        
    } catch (e) {
        throw new Error(e)
    }
    
    
})

router.put('/:id' , async (req,res)=>{
    const id = req.params.id
    console.log(req.body);
        await  Product.findByIdAndUpdate({_id:id} , {
            id:req.body.id,
            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description,
            rating:req.body.rating,
            category:req.body.category,
            comments:req.body.comments

        })  
        .then(i=>res.send())
        

})

router.delete('/:id' , async(req , res)=>{
    const id = req.params.id
    try {
        await Product.deleteOne({_id:id})
        res.send()
        
    } catch (e) {

        throw new Error(e)
    }
})




module.exports = router