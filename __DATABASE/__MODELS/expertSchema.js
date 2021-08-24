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
            phNumber : {type:String , required:true},
            AltPhNumber :{type:String },
            address :{type:String , required:true},
            pin :{type:Number , required:true},
            district:{type:String , required:true},
            state :{type:String , required:true},
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
            pinAvailable :{type:String , required:true},
        }
    ],
    placeWhereAvailable : [
        {
            place :{type :String,required:true}
        }
    ],
    services : [
        {
            serviceId:{
                type:ObjectId ,
                ref :"service"
            }
        }
    ],
    review :[
        {
            reviewId:{type:ObjectId , ref:"review"}
        }
    ]



}
,
{timestamps:true}
)

const Expert = mongoose.model('expert' , expertSchema);

module.exports = Expert;