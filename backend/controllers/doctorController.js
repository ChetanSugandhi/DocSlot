const Doctor = require('../models/Doctor');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).send('Error fetching doctors');
  }
};

// Get doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).send('Doctor not found');
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).send('Error fetching doctor');
  }
};

// Search doctors by specialty or location
exports.searchDoctors = async (req, res) => {
  const { specialty, location } = req.query;
  try {
    const query = {};
    if (specialty) query.specialty = specialty;
    if (location) query.location = location;

    const doctors = await Doctor.find(query);
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).send('Error searching doctors');
  }
};

// Add a new doctor (admin or onboarding)
exports.addDoctor = async (req, res) => {
  const { name, specialty, location, phone } = req.body;
  try {
    const newDoctor = new Doctor({ name, specialty, location, phone });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).send('Error adding doctor');
  }
};
