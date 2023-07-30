const express = require('express');

const router = express.Router();

const reportController = require('../../../controllers/api/v1/report_controller');
router.post('/create', reportController.createReport);
router.get('/allreports', reportController.getReport);
router.get('/status', reportController.getStatus);

module.exports = router;