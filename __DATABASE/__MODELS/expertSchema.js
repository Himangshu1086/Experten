const mongoose = require('mongoose')

const expertSchema = new mongoose.Schema({

    profession : {type:String , required:true},
    availability : {type:Boolean ,  default:true },
    name : {type : String , required:true},
    school : {type : String , required:true},
    twelveCollege :{type : String , required:true},
    UGEducation : {type : String , required:true},
    otherEducation1 : {type : String },
    otherEducation2 : {type : String },
    otherEducation3 : {type : String },
    experienceYear : {type : String },
    experiencePlace1 : {type : String },
    experiencePlace2 : {type : String },
    experiencePlace3 : {type : String },
    experiencePlace4 : {type : String },
    achievement1 : {type : String },
    achievement2 : {type : String },
    achievement3 : {type : String },
    achievement4 : {type : String },
    aboutMe: {type : String , required:true},
    mobileNumber : {type : Number , required:true},
    address : {type : String , required:true},
    pin : {type : Number , required:true},
    image : {type : String , required:true}




}
,
{timestamps:true}
)

const Expert = mongoose.model('expert' , expertSchema);

module.exports = Expert;