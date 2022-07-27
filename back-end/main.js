const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const app = express()

mongoose.Promise = global.Promise 



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


app.use('/api/user' , UserRouter)
app.use('/api/product' , ProductRouter)
app.use('/api/add-product' , addProductRouter)



app.listen(3002 , ()=>{
    console.log('listening on port 3002 ');
})