const express = require('express');
const router = express.Router();
const faker = require('../controllers/faker')

router.post('/create',faker.insertFakeData);

module.exports = router