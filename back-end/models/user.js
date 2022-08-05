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
        type:String , 
        required:true,
        min:4
    }, 
    seller:{
        type:Boolean,
        required:true
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
    },
    products: {
        items: [{  
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        }]
    }
})


const res = mongoose.model("User" , schema)

module.exports = res