const express = require('express');
const router = express.Router();
const adController = require('../controllers/ads')

router.get('/all',adController.findAll);
router.get('/ad',adController.findOne);
router.post('/insert',adController.insert)
router.put('/update',adController.edit)
router.put('/delete',adController.delete)


module.exports = router