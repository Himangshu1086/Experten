
const express = require('express')
const router = express.Router();

require('../../__DATABASE/__INITDB/initDB');
const Expert = require('../../__DATABASE/__MODELS/expertSchema')
const Review = require('../../__DATABASE/__MODELS/reviewSchema')
const Service = require('../../__DATABASE/__MODELS/serviceSchema')

router.post("/addExperts" , async(req , res)=>{
    
    
    
    try{
        const { profession , name , experienceYear ,aboutMe ,ProfilePic } = req.body;
        //console.log( profession , name , experienceYear ,aboutMe ,ProfilePic)
        
        if ( !profession  || !name || !experienceYear || !aboutMe || !ProfilePic )
        {
            return res.status(422).json("plz fill the details")
        }
        
            const expert = new Expert({  profession , name , 
                experienceYear ,aboutMe ,ProfilePic
            } );
            await expert.save();
            
            const review = new Review({expertId:expert._id})
            await review.save();
            const service = new Service({expertId:expert._id})
            await service.save();

            res.status(200).json({ message:"user registered successfully" })        
        
    
    }catch (err){
        console.log(err)
    }


})



router.get("/GetExpert" , async(req , res)=>{

    const professions = req.headers.profession;
    const expert = await Expert.find({profession : professions});
    res.status(200).json({expert})
})


router.get("/GetExpertDetails" , async(req , res)=>{

    const id = req.headers.id;
    const expert = await Expert.findById({_id : id});
    res.status(200).json({expert})
})





module.exports = router;