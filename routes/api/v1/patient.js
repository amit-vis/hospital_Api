const express = require('express');

const router = express.Router();

const patientController = require('../../../controllers/api/v1/patient_controller');

router.post('/register', patientController.createPatient);

module.exports = router;