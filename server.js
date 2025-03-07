const http= require('http')
const hostname='127.0.0.1'
const port=3001

const app = require('./app')
const server= http.createServer(app)

server.listen(port,hostname,()=>{
    console.log(`server started at http://${hostname}:${port}`)
})