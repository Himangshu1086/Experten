const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema.Types;
const serviceSchema  = new mongoose.Schema({

    expertId :{ type:ObjectId, ref:"expert",required:true},
    title :{type : String  , required:true},
    description : {type:String , required:true },
    price : {type:Number , required:true},
    discountPrice : {type:Number, required:true}
    


})

const Service = mongoose.model('service' , serviceSchema) ;

module.exports = Service;