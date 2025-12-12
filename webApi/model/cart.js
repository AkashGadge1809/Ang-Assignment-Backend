const mongoose = require('mongoose')

const cartschema= new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    prod_id :{type : String, required : true },
    name :{type : String, required : true },
    price :{type : String, required : true },
    desc :{type : String, required : true },
    image :{type : String, required : true }
})

module.exports= mongoose.model('cart',cartschema)       