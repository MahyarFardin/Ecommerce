const express = require('express')
const User = require('../models/user')
const Cryptr = require('cryptr')
cryptr = new Cryptr('nimamleo')
const router = express.Router()

router.get("/" , (req,res)=>{
    User.find()
    .then(users=>{
        users.forEach(user=>{
            user.pass = cryptr.decrypt(user.pass)
        })
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


router.post('/' ,(req , res)=>{
    let userPass = req.body.pass 
    let encryptpPass = cryptr.encrypt(userPass)
    let newUser = new User({
        firstName:req.body.firstName, 
        lastName:req.body.lastName,
        email:req.body.email,
        address:req.body.address,
        pass:encryptpPass,
        seller: req.body.seller,
        cart:{items:[]},
        products:{items:[]}
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
        seller: req.body.seller,
        cart:req.body.cart,
        products:req.body.products
    })
    .then(i=>{
        res.send(i)
    })


})


module.exports= router 