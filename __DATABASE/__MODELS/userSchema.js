const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema=  new mongoose.Schema({

    userName:{
        type: String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },

    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    confirmPass:{
        type:String,
        required:true
     }
} ,
{timestamps:true}

)


// hash the password 

userSchema.pre('save' , async function (next) {

    
    if(this.isModified('password'))
    {
        this.password =  await bcrypt.hash(this.password , 12);
        this.confirmPass = await bcrypt.hash(this.confirmPass ,12)
    }
    next();
});


const User  = mongoose.model('user' ,userSchema);

module.exports = User;
