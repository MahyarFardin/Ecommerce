const express = require('express') 
const mongoose = require('mongoose')
const bodyParser = require("body-parser") 

const app = express()  

mongoose.Promise = global.Promise    
   
const port = 3002

mongoose.connect("mongodb://localhost/shop")
.then(()=>{
    console.log("database successfuly connected ");
})
.catch(ex => console.log(ex))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({type:'application.json'})) 


app.use((req, res, next) => {  
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*') 
    res.setHeader('Access-Control-Allow-Methods', '*')    
 
    next()     
}) 

  
const UserRouter = require('./routers/user')
const ProductRouter = require('./routers/product')
const addProductRouter = require('./routers/add-product')   
const EmailRecoveryRouter = require('./routers/auth')   


// app.use('/api/user' , UserRouter)
app.use(UserRouter)
app.use('/api/product' , ProductRouter)
app.use('/api/add-product' , addProductRouter)  
app.use('/api/pass-recovery' , EmailRecoveryRouter)  



app.listen(port , ()=>{
    console.log('listening on port'+ port );       
}) 