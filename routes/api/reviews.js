const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/movies/:movieID/reviews
router.post('/movies/:movieId/reviews', ensureLoggedIn, reviewsCtrl.create);
//DELETE /api/reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.deleteReview);
//GET /api/reviews
router.get('/reviews', reviewsCtrl.index);

module.exports = router;