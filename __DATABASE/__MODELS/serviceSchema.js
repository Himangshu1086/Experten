const mongooose = require('mongoose')

const serviceSchema  = mongoose.Schema({

    profession :{type:String , requried:true },
    personName :{type:String , required:true},
    title :{type : String  , required:true},
    description : {type:String , required:true },
    price : {type:Number , required:true},
    otherCharges : {type:Number, required:true}
    


})

const Service = mongoose.model('service' , serviceSchema) ;

module.exports = Service;