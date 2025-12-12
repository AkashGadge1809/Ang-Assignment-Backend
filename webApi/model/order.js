const mongoose = require('mongoose')

const orderSchema= new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name :{type : String, required : true }, 
    userId :{type : String, required : true }, 
    price :{type : String, required : true }, 
    image :{type : String, required : true }, 
    desc :{type : String, required : true }
})

module.exports= mongoose.model('order',orderSchema)