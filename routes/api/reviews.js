const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

// POST /api/reviews/:id
router.post('/movies/:movieId/reviews', reviewsCtrl.create);

module.exports = router;