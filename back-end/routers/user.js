const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get("/" , (req,res)=>{
    User.find()
    .then(users=>{
        res.send(users)
    })
})

router.get('/:id' , (req , res)=>{
    const id = req.params.id
    User.findById({_id:id})
    .then(i=>{
        res.send(i)
    })
}) 


router.post('/' , (req , res)=>{
    let newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        address:req.body.address,
        pass:req.body.pass,
        cart:{items:[]}
    })
    newUser.save()
    res.send(newUser) 
}) 


router.put('/:id' , (req,res)=>{
    const id = req.params.id
    User.findByIdAndUpdate({_id:id} , {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        address:req.body.address,
        pass:req.body.pass,
        cart:req.body.cart
    })
    .then(i=>{
        res.send(i)
    })


})


module.exports= router 