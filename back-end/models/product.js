const mongose = require('mongoose')

const Schema = mongose.Schema({ 
    productId:{ 
        type:Number, 
        required:true,
        unique:true 
    },
    title:{
        type:String , 
        minlenght:3 , 
        trim:true,
        required:true,
        unique:true
    },
    price:{
        type:Number, 
        min:0,
        required:true,
        unique:true
    }
})


const Product = mongose.model('product' , Schema)


module.exports = Product