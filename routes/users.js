const express = require('express');
const userController = require('../controllers/users');
const router = express.Router();

router.post('/import', userController.importCSV);
router.post('/log', userController.Log);
router.get('/getuserinfo/:username', userController.getPolicyInfo);

module.exports = router;