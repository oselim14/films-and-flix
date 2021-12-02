const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');

// GET to /api/movies/search
router.get('/search', moviesCtrl.search);

module.exports = router;