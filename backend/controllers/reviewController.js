const Review = require('../models/Review');

// Add a review for a doctor
exports.addReview = async (req, res) => {
  const { doctorId, patientId, rating, comment } = req.body;

  try {
    const newReview = new Review({ doctorId, patientId, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).send('Error adding review');
  }
};

// Get all reviews for a specific doctor
exports.getReviewsByDoctor = async (req, res) => {
  const { id } = req.params;  // doctorId passed as parameter

  try {
    const reviews = await Review.find({ doctorId: id }).populate('patientId', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).send('Error fetching reviews');
  }
};

// Get all reviews (optional filter by rating or doctor)
exports.getAllReviews = async (req, res) => {
  const { doctorId, rating } = req.query;  // Filters from query parameters

  try {
    let filter = {};
    if (doctorId) filter.doctorId = doctorId;
    if (rating) filter.rating = { $gte: rating };  // Optional: filter by rating (minimum rating)

    const reviews = await Review.find(filter).populate('doctorId', 'name specialty').populate('patientId', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).send('Error fetching reviews');
  }
};
