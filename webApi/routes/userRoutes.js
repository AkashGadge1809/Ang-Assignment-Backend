const mongoose= require('mongoose')
const express= require('express')
const user= require('../model/user')

const router = express.Router();

router.get('/',(req,res,next)=>{

       user.find().then((data)=>{
            res.status(200).json({
            msg : " Simple Get from User ",
            userdata : data   
        })
    })
})

router.post('/',(req,res,next)=>{

    const u = new user({
        _id : new mongoose.Types.ObjectId(),
        fname : req.body.fname,
        lname : req.body.lname,
        uname : req.body.uname,
        password : req.body.password,
        role: req.body.role
    
    })

    u.save().then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })

    res.status(200).json({
        msg: 'This is simle POST request from product',
        user : u,

    })
})

router.get('/:userId',(req,res,next)=>{
    const id = req.params.userId;

    user.findById(id).then((data)=>{
        res.status(200).json({
            msg: "User Found",
            user : data
        })
    })
})

router.put('/:userId',(req,res,next)=>{
const id= req.params.userId;

user.findByIdAndUpdate(id,req.body).then((data)=>{
    res.status(200).json({
        msg : "User Updated",
        user : req.body
    })
})

})

router.delete('/:userid',(req,res,next)=>{

    const id= req.params.userid;

    user.findByIdAndDelete(id).then((data)=>{
        res.status(200).json({
            msg :" User Deleted",
            user :data
        })
    })
})
module.exports= router;