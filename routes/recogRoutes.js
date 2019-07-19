const router = require('express').Router();
const faceController = require('../controllers/faceController')

router.post('/', faceController.configureAge)
router.post('/alternate', faceController.alternateAge)

module.exports = router