const express = require('express')
const User = require('../models/user')
const Cryptr = require('cryptr')
cryptr = new Cryptr(process.env.SECRET_KEY)
const { sendEmail } = require('../utils/email')
const router = express.Router()


router.put('/api/user/req/:id' , async (req,res)=>{
    const id = req.params.id
    try {
        const user =await  User.findById({_id:id})
        if (!user) {
            return new Error('user not found')
        }
        let encryptpPass = cryptr.encrypt(req.body.password)
        user.pass = encryptpPass
        await user.save()
        res.send()
        
    } catch (e) {
        throw new Error(e)
    }
})


router.get("/api/user" , async (req,res)=>{
    try {
        const users = await User.find()
        .then(users=>{
            users.forEach(user=>{
                user.pass = cryptr.decrypt(user.pass)
            })
            res.send(users)
        })
        
    } catch (e) {
        throw new Error(e)
    }
})

router.get('/api/user/:id' ,async  (req , res)=>{ 
    const id = req.params.id
    try {
        await User.findById({_id:id})
        .then(i=>{
            res.send(i)
        })
    } catch (e) {
        throw new Error(e)
    }
    
}) 




router.post('/api/user' ,async (req , res)=>{
    try {
        let userPass = req.body.pass 
        let encryptpPass = cryptr.encrypt(userPass)
        let newUser = await new User({
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
    } catch (e) {
        throw new Error(e)
    }

}) 


router.put('/api/user/:id' ,async  (req,res)=>{
    try {
        await User.findByIdAndUpdate({_id:id} , {
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
    } catch (e) {
        throw new Error(e)
    }
    const id = req.params.id
 




})


module.exports= router 