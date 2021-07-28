const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const addressSchema =  new mongoose.Schema({

    user:{
        type:ObjectId,
        ref:"user",
        required:true
    }
    ,
            name:{
                type: String,
                required:true
            },
            town:{
                type: String,
                required:true
            },
            address:{
                type: String,
                required:true
            },
            houseNo:{
                type: String,
                required:true
            },
            phNumber:{
                type: Number,
                required:true
            },
            pin:{
                type: Number,
                required:true
            },
            landmark:{
                type: String,
                required:true
            }
} ,
{timestamps:true}

)

const Address  = mongoose.models.address  ||  mongoose.model('address' ,addressSchema);

module.exports = Address;