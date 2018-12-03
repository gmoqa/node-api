var express = require('express');
var router = express.Router();

var game = require('./routes/game-route');
var route = require('./routes/route');

router.use('/', route)
router.use('/games', game);

module.exports = router