const router = require('express').Router()
const controller = require('../controllers/game-controller')

router.get('/', controller.index)

module.exports = router