const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/', userController.login)
router.post('/register', userController.register)

module.exports = router