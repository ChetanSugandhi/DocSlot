const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Add a review for a doctor
router.post('/', reviewController.addReview);

// Get all reviews for a specific doctor
router.get('/doctor/:id', reviewController.getReviewsByDoctor);

// Get all reviews with optional filters
router.get('/', reviewController.getAllReviews);

module.exports = router;
