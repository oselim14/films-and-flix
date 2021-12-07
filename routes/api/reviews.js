const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/reviews/:id
router.post('/movies/:movieId/reviews', ensureLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.deleteReview);
router.get('/reviews', reviewsCtrl.index);

module.exports = router;