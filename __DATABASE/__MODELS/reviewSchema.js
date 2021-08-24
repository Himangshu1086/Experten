const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema.Types;
const reviewSchema  = new mongoose.Schema({

    expertId :{ type:ObjectId, ref:"expert", required:true},
    userId :{ type:ObjectId, ref:"expert", required:true},
    title :{type : String  , required:true},
    review : {type:String , required:true },
    rating : {type:Number , required:true},

})

const Review = mongoose.model('review' , reviewSchema) ;

module.exports = Review;