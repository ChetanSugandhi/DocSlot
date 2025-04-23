const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Book a new appointment
router.post('/', appointmentController.bookAppointment);

// Get all appointments for a user
router.get('/:userId', appointmentController.getAllAppointments);

// Get an appointment by ID
router.get('/:id', appointmentController.getAppointmentById);

// Cancel an appointment
router.delete('/:id', appointmentController.cancelAppointment);

module.exports = router;
