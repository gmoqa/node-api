var express = require('express');
var router = express.Router();

var game = require('./routes/game-route');
var main = require('./routes/main-route');
var review = require('./routes/review-route');

router.use('/', main)
router.use('/games', game);
router.use('/reviews', review);

module.exports = router