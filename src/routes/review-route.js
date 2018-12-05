const router = require('express').Router()
const controller = require('../controllers/review-controller')

router.get('/', controller.index)

module.exports = router
