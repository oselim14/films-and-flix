const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

// POST /api/reviews/:id
router.post('/movies/:IMDBid/reviews', reviewsCtrl.create);

module.exports = router;