const fetch = require('node-fetch');
const Movie = require('../../models/movie');

const SEARCH_URL = `https://imdb-api.com/en/API/SearchTitle/${process.env.API_KEY}`;
const TITLE_URL = `https://imdb-api.com/en/API/Title/${process.env.API_KEY}`
const TOP_URL = `https://imdb-api.com/en/API/BoxOffice/${process.env.API_KEY}`

module.exports = {
    search,
    detail,
    addMovie,
    update,
    topMovies,
};

async function search(req, res) {
    try{
        const url = `${SEARCH_URL}/${req.query.search}`;
        const results = await fetch(url).then((res) => res.json());
        res.json(results.results);
    } catch(e) {
        console.log(e);
        res.json('Error occurred accessing IMDb');
    }
}

async function topMovies(req, res) {
    const url = `${TOP_URL}`;
    const results = await fetch(url).then((res)=> res.json());
    res.json(results.items);
}

async function addMovie(req, res) {
    const movie = await Movie.getMovie(req.params.id);
    await movie.addReview(req.params.id);
    res.json(movie);
}

async function detail(req, res) {
    let movie = await Movie.getMovie(req.params.IMDBid);
    if (!movie) {
       const url = `${TITLE_URL}/${req.params.IMDBid}`;
       const result = await fetch(url).then((res)=> res.json());
       movie = await Movie.create({
            title: result.title,
            directors: result.directors,
            writers: result.writers,
            stars: result.stars,
            image: result.image,
            releaseYear: result.year,
            description: result.plot,
            IMDBid: result.id
       });
    }
    res.json(movie);
}

async function update(req, res){
    const updatedMovie = await Movie.findByIdAndUpdate(
        {_id: req.params.id, user: req.user._id},
        req.body,
        {new: true},
        function(err, movie) {
            if (err || !movie) return
            movie.reviews.remove(req.params.id);
            movie.save();
        }
    )
    res.json(updatedMovie);
}