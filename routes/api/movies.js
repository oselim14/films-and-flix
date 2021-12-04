const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');

// GET to /api/movies/search
router.get('/search', moviesCtrl.search);
// Get to /api/movies/:id
router.get('/:id', moviesCtrl.detail);
//POST to /api/movies/:id
router.post('/:id', moviesCtrl.addMovie);

module.exports = router;