const express = require('express')
const app = express()
const mongoose = require('mongoose')
const parser = require('body-parser')
const cors = require('cors');

const userRouter= require('./webApi/routes/userRoutes')
const productRouter= require('./webApi/routes/productRoutes')
const cartRouter = require('./webApi/routes/cartRoutes')
const orderRouter = require('./webApi/routes/orderRoutes')

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log("Error in connetion", err)
})

app.use(cors());
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/user', userRouter)
app.use('/product',productRouter)
app.use('/cart',cartRouter)
app.use('/order',orderRouter)


module.exports = app;