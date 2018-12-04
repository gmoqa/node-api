const express = require('express');
const router = express.Router();

const game = require('./routes/game-route');
const main = require('./routes/main-route');
const review = require('./routes/review-route');

router.use('/', main)
router.use('/games', game);
router.use('/reviews', review);

module.exports = router