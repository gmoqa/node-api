const express = require('express')
const router = express.Router()

const defaultRoutes = require('./default-route')
const gameRoutes = require('./game-route')
const reviewRoutes = require('./review-route')

router.get('/', defaultRoutes)
router.use('/games', gameRoutes)
router.use('/reviews', reviewRoutes)

module.exports = router
