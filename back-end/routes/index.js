const express = require('express');
const router = express.Router();
const ads = require('./ads');
const auth = require('./auth')
const fake = require('./faker')

/* GET home page. */

router.use('/ads',ads);
router.use('/auth',auth)
router.use('/fake',fake)

module.exports = router;
