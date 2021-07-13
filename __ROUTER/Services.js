const express = require('express')
const router = express.Router();

const Services = require('../__DATABASE/__MODELS/serviceSchema');

router.post("/services " , async (req , res)=>{

    const { profession , title , description , price , otherCharges } = req.body;
    const userTokens = req.cookies.token;
})




module.exports = router;