const router = require('express').Router()
const userRoutes = require('./userRoutes')
const recogRoutes = require('./recogRoutes')

router.use('/users', userRoutes)
router.use('/recogs', recogRoutes)

module.exports = router