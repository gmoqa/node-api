const router = require('express').Router()
const controller = require('../controllers/default-controller')

router.get('/', controller.index)

module.exports = router
