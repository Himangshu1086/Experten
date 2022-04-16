
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
        
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(422).json({err:"user exits already"})
        }
        else if(password != confirmPass){

            return res.status(422).json({error:"password not matched"})
        }
        else{
            const user = new User({type :"user" , userName , mobileNumber , email ,password , confirmPass} );
            await user.save();
            
            const cart = new Cart({user:user._id})
            await cart.save();
           
            const token = jwt.sign({_id :user._id} , process.env.JWT_SECRET_KEY , {
                expiresIn:"30d"
            });   
            res.cookie("token" ,token ,{ secure: true });
            res.status(200).json({token})
            console.log(token)



            res.status(200).json({ message:"user registered successfully" })
        }
        
        
    
    }catch (err){
        console.log(err)
    }
})



//login in route

router.post("/signIn" , async (req , res ) => {


    try{

        const { email , password } = req.body;
        console.log(email , password);

        if( !email || !password){
            return res.status(200).json({error:" plz fille the fields"})
        }

        const userLogin = await User.findOne({email});
        console.log(userLogin)
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





// get particular user logged in 

router.get("/userLoggedIn"  , async ( req  , res ) =>{
    try{
        const userTokens = req.cookies.token;
        //const userTokens = req.headers.Loggedtoken; 

        // const ab = jwt.decode(userTokens);
        // console.log(ab)
        // const user_id = ab._id
        // const user = await User.find({_id: user_id })
        // console.log(user[0].type)
        const verifyToken = await jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        console.log(`user : ${verifyToken}`);
        const user = await User.find({_id: verifyToken._id })
        res.status(200).json({user})

    }catch(err){
        res.status(401).send("Unauthorised")
        console.log(err);
    }
    
})



router.get("/superAdminLogin"  , async ( req  , res ) =>{
    try{
        const userTokens = req.cookies.token;
        const verifyToken = await jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        const user = await User.find({_id: verifyToken._id , type:"super"});
        res.status(200).json({user});
    }catch(err){
        res.status(401).send("Unauthorised")
        console.log(err);
    }
    
})


router.get("/expertAdminLogin"  , async ( req  , res ) =>{
    try{
        const userTokens = req.cookies.token;
        const verifyToken = await jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        const user = await User.find({_id: verifyToken._id , type :"expert"});
        res.status(200).json({user});
    }catch(err){
        res.status(401).send("Unauthorised")
        console.log(err);
    }
    
})














module.exports = router;