 

const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema.Types;

const cartSchema =  new mongoose.Schema({

    user:{
        type:ObjectId,
        ref:"user",
        required:true
    }
    ,
    products:[
        {
            product:{
                type: ObjectId ,
                ref:"product"
            }
        }
    ]
} ,
{timestamps:true}

)

const Cart  = mongoose.models.cart  ||  mongoose.model('cart' ,cartSchema);

module.exports = Cart;