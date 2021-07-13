
const express = require('express')
const router = express.Router();

require('../__DATABASE/__INITDB/initDB');
const Expert = require('../__DATABASE/__MODELS/expertSchema')


router.post("/AddExpert" , async(req , res)=>{
    
    const { profession ,
    name ,
    school ,
    twelveCollege ,
    UGEducation ,
    otherEducation1 ,
    otherEducation2 ,
    otherEducation3 ,
    experienceYear ,
    experiencePlace1 ,
    experiencePlace2 ,
    experiencePlace3 ,
    experiencePlace4 ,
    achievement1 ,
    achievement2 ,
    achievement3 ,
    achievement4 ,
    aboutMe ,
    mobileNumber ,
    address ,
    pin ,
    image } = req.body;
    // if (!userName || !mobileNumber  ||  !password || !confirmPass )
    // {
    //     return res.status(422).json({error:"plz fill the details"})
    // }

    try{
        
            const expert = new Expert({ profession ,name ,
                school ,
                twelveCollege ,
                UGEducation ,
                otherEducation1 ,
                otherEducation2 ,
                otherEducation3 ,
                experienceYear ,
                experiencePlace1 ,
                experiencePlace2 ,
                experiencePlace3 ,
                experiencePlace4 ,
                achievement1 ,
                achievement2 ,
                achievement3 ,
                achievement4 ,
                aboutMe ,
                mobileNumber ,
                address ,
                pin ,
                image } );

            await expert.save();
            
            // const review = new Review({expert:expert._id})
            // await review.save();
            // const service = new Service({expert:expert._id})
            // await service.save();

            res.status(200).json({ message:"user registered successfully" })        
        
    
    }catch (err){
        console.log(err)
    }


})



router.get("/GetExpert" , async(req , res)=>{
    const expert = await Expert.find();
    res.status(200).json({expert})
})






module.exports = router;