const mongoose = require('mongoose')

const schema = mongoose.Schema({  
    firstName:{
        type:String ,  
        minlenght:3, 
        required:true
    },

    lastName:{
        type:String , 
        minlenght:3,
        required:true,
    },

    email:{
        type:String , 
        unique:true,
        minlenght:8,
        required:true
    },

    address:{
        type:String , 
        minlenght:8,
        required:true
    }, 


    pass:{
        type:Number , 
        required:true,
        min:4
    }, 

    cart: {
        items: [{  
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }
})


const res = mongoose.model("User" , schema)

module.exports = res