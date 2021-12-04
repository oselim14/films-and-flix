const fetch = require('node-fetch');
const Movie = require('../../models/movie');

const SEARCH_URL = `https://imdb-api.com/en/API/SearchTitle/${process.env.API_KEY}`;
const TITLE_URL = `https://imdb-api.com/en/API/Title/${process.env.API_KEY}`

module.exports = {
    search,
    detail,
    addMovie,
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

async function detail(req, res) {
    const url = `${TITLE_URL}/${req.params.id}`;
    const result = await fetch(url).then((res)=> res.json());
    res.json(result);
}

async function addMovie(req, res) {
    const movie = await Movie.getMovie(req.params.id);
    await movie.addReview(req.params.id);
    res.json(movie);
}