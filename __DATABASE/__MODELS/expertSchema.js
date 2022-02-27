const mongoose = require('mongoose')
const { ObjectId} = mongoose.Schema.Types;
const expertSchema = new mongoose.Schema({

    profession : {type:String , required:true},
    availability : {type:Boolean ,  default:true },
    name : {type : String , required:true},
    Education : [
        {
            College : {type:String },
            course : {type :String },
            subject :{type:String  },
            percentage : {type :Number}  
        }
    ],
    experiences : [
        {
            Title :{type:String},
            detail : {type :String}
        }
    ],
    experienceYear : {type : String },
    aboutMe: {type : String , required:true},
    contact : [
        {
            phNumber : {type:String },
            AltPhNumber :{type:String },
            address :{type:String },
            pin :{type:Number },
            district:{type:String },
            state :{type:String },
            email : {type:String}
        }
    ],
    ProfilePic : {type : String , required:true},
    imageGallery :[
        {
            Photo :{type:String},
            PhotoDescript : {type:String} 
        }
    ],
    pinWhereAvaiable : [
        {
            pinAvailable :{type:String },
        }
    ],
    placeWhereAvailable : [
        {
            place :{type :String}
        }
    ],


}
,
{timestamps:true}
)

const Expert = mongoose.models.expert || mongoose.model('expert' , expertSchema);

module.exports = Expert;