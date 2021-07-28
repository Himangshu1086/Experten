
const dotenv = require("dotenv")
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

dotenv.config({path:"./config.env"});


require("./__DATABASE/__INITDB/initDB");


// link the router files 
app.use(require('./__ROUTER/experten'))
app.use(require('./__ROUTER/Auth'))
app.use(require('./__ROUTER/Services'))
app.use(require('./__ROUTER/Address'))






if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));

    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build/index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })
}



app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
})