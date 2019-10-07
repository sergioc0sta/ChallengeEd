const jwt = require('jsonwebtoken')
const env = require('../../.env')

const auth = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']
        if (!token) {
            res.send({ erro: 'Token não identificado' })
        }
        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                res.send({ erro: 'Falha na validação do Token'})
            } else {
                next()
            }
        })
    }
}

module.exports = {auth}