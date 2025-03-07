const express = require('express')
const app = express()
const mongoose = require('mongoose')
const parser = require('body-parser')

const userRouter= require('./webApi/routes/userRoutes')
const productRouter= require('./webApi/routes/productRoutes')

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log("Error in connetion", err)
})

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/user', userRouter)
app.use('/product',productRouter)


module.exports = app;