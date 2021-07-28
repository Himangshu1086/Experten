const express = require('express')
const router = express.Router();
require('../__DATABASE/__INITDB/initDB');
const AddAddress = require('../__DATABASE/__MODELS/addressSchema');
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');

router.use(cookieParser());


router.post("/userAddress" , async(req , res)=>{


    const userTokens = req.cookies.token;

    const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);

    const { Uname , Mobile , Town , HouseNo , Address , pin , Landmark   } = req.body;

    if (!Uname || !Mobile || !Town  ||  !HouseNo || !Address || !pin  ||  !Landmark)
    {
        return res.status(422).json({error:"plz fill the details"})
    }
 
    try{
       
            const address = new AddAddress({   
                user:verifyToken._id,name:Uname , town:Town , address:Address , houseNo:HouseNo ,phNumber:Mobile , pin:pin ,  landmark:Landmark});
            await address.save();
            res.status(200).json({ message:" Address added successfully" })
    
    }catch (err){
        console.log(err)
    }
})






router.get('/address' , async (req , res)=>{
    try{
        const userTokens = req.cookies.token;
        const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        const addresses = await AddAddress.find({user:verifyToken._id});
        res.status(200).json(addresses);
    }catch(err){
        console.log(err);
    }
        
})





module.exports = router;