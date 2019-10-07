require('../models/userModel')

const mongoose = require('mongoose'),
    TaskUser = mongoose.model('user'),
    env = require('../../.env'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    emailRegex = /\S+@\S+\.\S+/,
    passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;



const signup = (req, res) => {
    const name = req.body.name || ''
    email = req.body.email || '',
    password = req.body.password || '',
    confirmPassword = req.body.confirmPassword || '',
    salt = bcrypt.genSaltSync(),
    passwordHash = bcrypt.hashSync(password, salt)

    if(!email.match(emailRegex)){
        res.send({erro: 'Email não é valido!'})
    }

    if(!password.match(passwordRegex)){
        res.send({erro: "Necessário: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$ %) e tamanho entre 6-20."})
    }
    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        res.send({ erro: 'Passwords não coincidem.'})
    }
    TaskUser.findOne({email}, (err, user)=>{
        if(err){
            res.send({erro : "Impossivel realizar operações"})
        } else if (user){
            res.send({erro : "Utilizador existente"})
        } else {
            const newUser =  new TaskUser({name, email, password: passwordHash})
            newUser.save((err, result)=>{
                if(err)
                    res.send({erro: 'Impossivel realizar operações'})
                res.send(result)
            })
        }   
    })
}

const login = (req, res) => {
    const email = req.body.email || '',
    password = req.body.password || ''
    TaskUser.findOne({ email }, (err, user) => {
        if (err) {
            res.send({erro : "Utilizador existente"})
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({email: user.email}, env.authSecret, {
                expiresIn: "1 day"
            })
            const { name, email, valid } = user
            if(valid === false){
                res.json({ success: false, erro :'Utilizador não valido' })
            } else{
                res.json({ name, email, token, success: true, id: user._id})
            }
        }
        else {
            res.json({ success: false, erro: 'Utilizador/Password inválidos'})
        }
    })
}




module.exports = {
    signup,
    login
}