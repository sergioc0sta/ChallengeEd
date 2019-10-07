const router = require('express').Router()
const user = require('../controllers/userController')

router.post('/signup', user.signup)
router.post('/login', user.login)

module.exports = router


