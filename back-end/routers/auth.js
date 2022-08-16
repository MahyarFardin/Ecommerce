const express = require('express')
const User = require('../models/user')
const { sendEmail } = require('../utils/email')
const router = express.Router()


router.get('/' , (req , res)=>{
    res.send('nimaaaaaaaaaaa')
    console.log(req.query.email);
    sendEmail()
})



module.exports = router