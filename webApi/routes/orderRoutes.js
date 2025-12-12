const mongoose = require('mongoose')
const express= require('express')
const order= require('../model/order')

const router = express.Router()

router.post('/',(req,res,next)=>{
    const o = new order({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        userId : req.body.userId,
        price : req.body.price,
        image : req.body.image,
        desc : req.body.desc
    })

    o.save().then((data)=>{
        res.status(200).json({
            msg : 'order saved',
            order : data
        })
    }).catch((err) => {
        res.status(500).json({
            msg: 'Error saving order',
            error: err
        });
    });
})

router.get('/',(req,res,next)=>{
    order.find().then((data)=>{
        res.status(200).json({
            msg : 'order Fetched',
            order : data
        })
    }).catch((err) => {
        res.status(500).json({
            msg: 'Error fetching orders',
            error: err
        });
    });
})

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;

    order.find({ userId: id }).then((data) => {
        res.status(200).json({
            msg: 'orders fetched',
            orders: data
        });
    }).catch((err) => {
        res.status(500).json({
            msg: 'Error fetching orders',
            error: err
        });
    });
});

router.put('/:orderId',(req,res,next)=>{

    const id = req.params.orderId

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            msg: 'Invalid order ID'
        });
    }

    order.findByIdAndUpdate(id, req.body, { new: true }).then((data)=>{
        if (!data) {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }
        res.status(200).json({
            msg : 'order updated',
            order : data
        })
    }).catch((err) => {
        res.status(500).json({
            msg: 'Error updating order',
            error: err
        });
    });
})
router.delete('/:orderId',(req,res,next)=>{

    const id = req.params.orderId

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            msg: 'Invalid order ID'
        });
    }

    order.findByIdAndDelete(id).then((data)=>{
        if (!data) {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }
        res.status(200).json({
            msg : 'order deleted',
            order : data
        })
    }).catch((err) => {
        res.status(500).json({
            msg: 'Error deleting order',
            error: err
        });
    });
})

module.exports= router