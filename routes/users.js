const express = require('express');
const userController = require('../controllers/users');
const router = express.Router();

router.post('/import', userController.importCSV);

module.exports = router;