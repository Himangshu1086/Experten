
const express = require('express')
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');



require('../__DATABASE/__INITDB/initDB');
const User = require('../__DATABASE/__MODELS/userSchema');
const Cart = require('../__DATABASE/__MODELS/cartSchema')


router.use(cookieParser());



//register user

router.post('/register', async (req , res )=>{

     const { userName , mobileNumber , email ,password , confirmPass } = req.body;
    if (!userName || !mobileNumber  ||  !password || !confirmPass )
    {
        return res.status(422).json({error:"plz fill the details"})
    }

    try{
        
        const userExist = await User.findOne({mobileNumber});

        if(userExist){
            return res.status(422).json({err:"user exits already"})
        }
        else if(password != confirmPass){

            return res.status(422).json({error:"password not matched"})
        }
        else{
            const user = new User({userName , mobileNumber , email ,password , confirmPass} );

            await user.save();
            
            const cart = new Cart({user:user._id})
            await cart.save();

            res.status(200).json({ message:"user registered successfully" })
        }
        
        
    
    }catch (err){
        console.log(err)
    }
})



//login in route

router.post("/signIn" , async (req , res ) => {


    try{

        const { mobileNumber , password } = req.body;

        if( !mobileNumber || !password){
            return res.status(200).json({error:" plz fille the fields"})
        }

        const userLogin = await User.findOne({mobileNumber});
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password);

        if(isMatch)
               {
                const token = jwt.sign({_id :userLogin._id} , process.env.JWT_SECRET_KEY , {
                    expiresIn:"30d"
                });
            
                    
                res.cookie("token" ,token ,{ secure: true });
                res.status(200).json({token})
                console.log(token)
               }  
        
        else
        {
            res.status(401).json({error:"user error"});
            
        }
           
    }
    else
    {
        
        res.status(401).json({message:"invalid Credentials"})
    }
        

    }catch(err){
        console.log(err)
    }
})



// get all user

router.get("/getAllUsers" , async(req , res)=>{
    try {

        const users = await User.find();
        res.status(200).json({users});


        
    } catch (error) {
        console.log(error)
    }
} )






router.post("/userLoggedIn"  , async ( req  , res ) =>{
    try{
        //const userTokens = req.cookies.token;
        const {userTokens } = req.body; 
        //console.log(`the cookie req ${userTokens}`);
        // const ab = jwt.decode(userTokens);
        // console.log(ab)
        const verifyToken = await jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        //console.log(`user : ${verifyToken}`);

        const user = await User.findById({_id: verifyToken._id});
        res.status(200).json({user});
        // console.log(user)

    }catch(err){
        res.status(401).send("Unauthorised")
        console.log(err);
    }
    
})



module.exports = router;