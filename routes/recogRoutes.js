const router = require('express').Router();
const faceController = require('../controllers/faceController')

router.post('/', faceController.configureAge)

module.exports = router