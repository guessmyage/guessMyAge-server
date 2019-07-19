const router = require('express').Router();
const faceController = require('../controllers/faceController')
const image = require('../helpers/image.js')

router.post('/', image.multer.single('.....'), image.sendUploadToGCS, faceController.configureAge)

module.exports = router