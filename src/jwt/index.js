const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express()

const SECRET = 'arydalex'

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ message: "Tudo ok por aqui!"})
})

app.get('/clientes', (req, res) => {
    res.json([{id: 1, name: 'ary'}])
})

app.post('/login', (req, res) => {
    if(res.body.user === 'ary' && req.body.password === '123') {
        const token = jwt.sing({userId: 1}, SECRET, { expiresIn: 300 })
        return res.json({ auth: true, token })
    }

    res.status(401).end()
})

app.post('/logout', (req, res) => {
    res.end()
})

const server = http.createServer(app)