
const dotenv = require("dotenv")
const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

dotenv.config({path:"./config.env"});

require("./__DATABASE/__INITDB/initDB");

// link the router files 
app.use(require('./__ROUTER/experten'))
app.use(require('./__ROUTER/Auth'))
app.use(require('./__ROUTER/experten'))
app.use(require('./__ROUTER/Services'))


const PORT = process.env.PORT || 5000



if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"))
}



app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
})