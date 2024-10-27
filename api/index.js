const dotenv = require('dotenv')
const express = require('express')
const server = express()
dotenv.config()
const port = process.env.PORT || 8000;
server.use(express.json())

server.listen(port,() => {
    console.log(`Server Started on port ${port}`)
})
