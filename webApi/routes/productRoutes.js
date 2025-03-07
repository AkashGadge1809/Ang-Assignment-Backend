const mongoose = require('mongoose')
const express = require('express')
const product = require('../model/product')

const router = express.Router();


router.post('/',(req,res,next)=>{

    const p= new product({
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
         desc:req.body.desc,
        image: req.body.image
    })

    p.save().then((data)=>{
        console.log("product Saved")
    }).catch((err)=>{
        console.log(err)
    })

    res.status(200).json({
    msg:" Product Saved",
    product :p

    })
})

router.get('/',(req,res,next)=>{
    product.find().then((data)=>{
        res.status(200).json({
            msg : "Products Fetched",
            product : data
        })
    })
})

router.get('/:proId',(req,res,next)=>{
    const id= req.params.proId;                                                   

    product.findById(id).then((data)=>{
        res.status(200).json({
            msg : "Products Fetched",
            product : data
        })
    })
})

router.put('/:proid',(req,res,next)=>{
    const id= req.params.proid;
    product.findByIdAndUpdate(id,req.body).then((data)=>{
        res.status(200).json({
            msg : "Products Updated",
            product : data
        })
    })
})

router.delete('/:proId',(req,res,next)=>{
    const id= req.params.proId;
    product.findByIdAndDelete(id).then((data)=>{
        res.status(200).json({
            msg : "Products Deleted",
            product : data
        })
    })
})

module.exports= router;