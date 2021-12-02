const fetch = require('node-fetch');
const Movie = require('../../models/movie');

const SEARCH_URL = `https://imdb-api.com/en/API/SearchTitle/${process.env.API_KEY}`;

module.exports = {
    search,
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
