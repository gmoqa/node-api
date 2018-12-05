const router = require('express').Router()

const gameRoutes = require('./game-route')
const mainRoutes = require('./main-route')
const reviewRoutes = require('./review-route')

router.use('/', mainRoutes)
router.use('/games', gameRoutes)
router.use('/reviews', reviewRoutes)

module.exports = router