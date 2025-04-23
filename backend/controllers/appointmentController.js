const Appointment = require('../models/Appointment');

// Book a new appointment
exports.bookAppointment = async (req, res) => {
  const { doctorId, patientId, date, time, note } = req.body;

  try {
    const newAppointment = new Appointment({ doctorId, patientId, date, time, note });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).send('Error booking appointment');
  }
};

// Get all appointments for a user
exports.getAllAppointments = async (req, res) => {
  const { userId } = req.params; // Assuming userId is passed as a parameter

  try {
    const appointments = await Appointment.find({ patientId: userId }).populate('doctorId', 'name specialty');
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).send('Error fetching appointments');
  }
};

// Get an appointment by ID
exports.getAppointmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findById(id).populate('doctorId', 'name specialty');
    if (!appointment) {
      return res.status(404).send('Appointment not found');
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).send('Error fetching appointment');
  }
};

// Cancel an appointment
exports.cancelAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      return res.status(404).send('Appointment not found');
    }
    res.status(200).send('Appointment canceled successfully');
  } catch (error) {
    res.status(500).send('Error canceling appointment');
  }
};
