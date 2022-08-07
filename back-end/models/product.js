const mongose = require('mongoose')

const Schema = mongose.Schema({ 
    id:{ 
        type:Number, 
        required:true, 
        unique:true  
    },
    title:{
        type:String , 
        minlenght:3 ,  
        trim:true,
        required:true, 
    }, 
    price:{
        type:String,   
        min:0,
        required:true,
    }, 
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        rate:{type:Number , required:true}, 
        count:{type:Number , required:true}
    },
    category:{
        type:String,
        required:true
    },
    comments:{
        comment:[{
            text:{type:String},
            commentOwner:{
                type:mongose.Schema.Types.ObjectId,
                ref:'User'
            }
        }]
    }
})


const Product = mongose.model('product' , Schema)  


module.exports = Product