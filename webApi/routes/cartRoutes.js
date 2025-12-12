const mongoose= require('mongoose')
const express = require('express')
const cart = require('../model/cart')

const router = express.Router()


router.post('/',(req,res,next)=>{


    const c= new cart({
        _id : new mongoose.Types.ObjectId(),
        prod_id : req.body._id,
        name : req.body.name,
        price : req.body.price,
        desc : req.body.desc,
        image : req.body.image,

    })

    c.save().then((data)=>{
        res.status(200).json({
            msg : 'product added to cart',
            cart : data
        })
    }).catch((err)=>{
        console.log(err)
    })

})

router.get('/',(req,res,next)=>{

    cart.find().then((data)=>{
        res.status(200).json({
            msg : 'product fetched',
            cart : data
        })
    })
})

router.get('/:prodId',(req,res,next)=>{
    const id= req.params.prodId

    cart.findById(id).then((data)=>{
        res.status(200).json({
            msg : 'product fetched',
            cart : data
        })
    })
})

router.put('/:prodId',(req,res,next)=>{
    const id= req.params.prodId

    cart.findByIdAndUpdate(id,req.body).then((data)=>{
        res.status(200).json({
            msg : 'cart updated',
            cart : data

        }).catch((err)=>{
            console.log(err)
        })
    })
})

router.delete('/:proId',(req,res,next)=>{
    const id = req.params.proId

    cart.findByIdAndDelete(id).then((data)=>{
        res.status(200).json({
            msg :' Product deleted',
            product : data
        })
    })
})


module.exports= router