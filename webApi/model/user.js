const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    fname : { type : String, required : true},
    lname : { type : String, required : true}, 
    uname : { type : String, required : true},
    password : { type : String, required : true},
    role: { type : String, required : true},

})

module.exports= mongoose.model('user',userSchema);