const express = require('express')
const router = express.Router()
const Saldo = require('../models/Saldo')

const expressValidator = require('express-validator')

const validate = [
    expressValidator.check('saldo').isLength({min: 1}).withMessage('Field saldo can not be null'),
    expressValidator.check('saldo').isNumeric().withMessage('Field saldo should be a number')
]

// user
const check = [(req, res, next) => {

    Users.findOne({username: req.header('username')}).then( result => {
        const user = result.username; 
        const pass = result.password;

        if (req.header('password') != pass) {
            console.log("Incorrect password")
            return res.status(403).send()
        }else {
            console.log("Correct password");
            next()
        }

    }).catch(err => {
        return res.status(403).send("Incorrect username");
    })
}]

router.get('/', (req, res) => {
    Saldo.find().then(saldos => {
        res.status(200).send(saldos);
    }).catch(error => {
        res.status(500).send(error)
    })
})

router.get('/:id', (req, res) => {

    Saldo.findById(req.params.id)
    .then(saldo => {
        res.status(200).send(saldo)
    }).catch(error => {
        res.status(404);
    })

})

// user
router.post('/user', (req, res) => {
    const user = new Users({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    })

    user.save().then(() => {
        res.status(200).send()
    })
})

router.post('/', [validate], (req, res) => {

    const erros = expressValidator.validationResult(req);
    if(!erros.isEmpty()){
        return res.status(422).send({erros: erros.array()})
    }

    const saldo = new Saldo({
        saldo: req.body.saldo
    })

    saldo.save()
    .then(result => {
        res.status(201).send(result)
    })
})

router.delete('/', (req, res) => {
    
    Saldo.deleteMany().then(result => {
        res.status(200).send()
    });
})

router.delete('/query', (req, res) => {
    
    Saldo.findByIdAndRemove(req.query.id)
    .then(result => {
        res.status(200).send(result)
    }).catch( error => {
        res.status(404).send()
    })
})

router.put('/:value', (req, res) => {
    const pathValue = req.params.value

    Saldo.findById(req.query.id).then(saldo => {
        saldo.saldo = pathValue
        saldo.save().then(result => {
            res.status(200).send(result)
        })
    }).catch( error => {
        res.status(404).send()
    })

})

module.exports = router;