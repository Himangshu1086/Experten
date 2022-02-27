const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema.Types;
const reviewSchema  = new mongoose.Schema({

    expertId :{ type:ObjectId, ref:"expert"},
    userId :{ type:ObjectId, ref:"expert"},
    title :{type : String  },
    review : {type:String  },
    rating : {type:Number },

})

const Review = mongoose.model('review' , reviewSchema) ;

module.exports = Review;