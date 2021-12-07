const fetch = require('node-fetch');
const Movie = require('../../models/movie');

const TITLE_URL = `https://imdb-api.com/en/API/Title/${process.env.API_KEY}`

module.exports = {
    create,
    deleteReview,
}

async function create(req, res) {
    const movie = await Movie.findById(req.params.movieId);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    movie.reviews.push(req.body);
    await movie.save();
    res.json(movie);
}

async function deleteReview(req, res){
    const movie = await Movie.findOne({'reviews._id': req.params.id, 'reviews.userId': req.user._id});
    console.log(movie);
    movie.reviews.remove(req.params.id);
    movie.save();
    res.json(movie);
}