const express = require('express');
const router = express.Router()

const doctorController = require('../../../controllers/api/v1/doctor_controller');

router.post('/register', doctorController.registerDoctor);
router.get('/get', doctorController.getApi);
router.post('/create-session', doctorController.createSession);

module.exports= router;

