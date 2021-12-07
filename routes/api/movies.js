const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');

// GET to /api/movies/search
router.get('/search', moviesCtrl.search);
// GET to /api/movies/
router.get('/', moviesCtrl.topMovies);
// Get to /api/movies/:id
router.get('/:IMDBid', moviesCtrl.detail);
//POST to /api/movies/:id
router.post('/:id', moviesCtrl.addMovie);

router.put('/:id', moviesCtrl.update);

module.exports = router;