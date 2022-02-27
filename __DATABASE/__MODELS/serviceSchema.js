const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema.Types;
const serviceSchema  = new mongoose.Schema({

    expertId :{ type:ObjectId, ref:"expert"},
    title :{type : String  },
    description : {type:String },
    price : {type:Number },
    discountPrice : {type:Number }
    


})

const Service = mongoose.model('service' , serviceSchema) ;

module.exports = Service;