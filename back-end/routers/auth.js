const express = require('express')
const User = require('../models/user')
const { sendEmail } = require('../utils/email')
const router = express.Router()



router.get('/' , async (req , res)=>{
    const email = req.query.email
    req.email = email
    sendEmail({email:email})
    const user =await  User.findOne({email:email}) ;



    res.send()
})




module.exports = router