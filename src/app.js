const express = require('express')
const mongoose = require('mongoose')
const { json } = require('body-parser')
const cors = require('cors')
const path = require('path')
const jwt = require('jsonwebtoken')

const saldos = require('./routes/saldo')
const index = require('./jwt/index')

const server = express()
const port = 2004

server.use(json())
server.use(cors())
server.use('/saldo', saldos)
server.use(express.static('public'))

server.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"))
})

server.use((req, res) => res.status(404).sendFile(path.join(__dirname, "views", "404.html")));

const main = async () => {
  await mongoose.connect('mongodb+srv://AriellyDO:02042004@cluster0.jl7ho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}

main()
.then(() => {
    server.listen(port, () => {
        console.log(`server running on port ${port}`)
      })
})
.catch(err => console.log(err));