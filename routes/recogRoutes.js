const router = require('express').Router();
const faceController = require('../controllers/faceController')
const image = require('../helpers/image.js')

router.post('/', image.multer.single('image'), image.sendUploadToGCS, faceController.configureAge)
router.post('/alternate', faceController.alternateAge)

module.exports = router