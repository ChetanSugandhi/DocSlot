const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Get all doctors
router.get('/', doctorController.getAllDoctors);

// Get a single doctor by ID
router.get('/:id', doctorController.getDoctorById);

// Search doctors by specialty or location
router.get('/search', doctorController.searchDoctors);

// Add a new doctor
router.post('/', doctorController.addDoctor);

module.exports = router;
