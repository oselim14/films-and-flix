const fetch = require('node-fetch');
const Movie = require('../../models/movie');

const TITLE_URL = `https://imdb-api.com/en/API/Title/${process.env.API_KEY}`

module.exports = {
    create,
}

// async function create(req, res) {
//     let movie = await Movie.getMovie(req.params.IMDBid);
//     if (!movie){
//         const url = `${TITLE_URL}/${req.params.IMDBid}`;
//         const result = await fetch(url).then((res)=> res.json());
//         movie = await Movie.create({
//             title: result.title,
//             director: result.directorList,
//             writer: result.writerList,
//             releaseYear: result.year,
//             image: result.image,
//         });
//     } else {
//         await movie.save();
//         res.json(movie);
//     }
// }


async function create(req, res) {
    let movie = await Movie.getMovie(req.params.IMDBid);
    if (!movie) {
       const url = `${TITLE_URL}/${req.params.IMDBid}`;
       const result = await fetch(url).then((res)=> res.json());
       movie = await Movie.create({
            title: result.title,
            director: result.directorList,
            writer: result.writerList,
            releaseYear: result.year,
            description: result.plot,
            reviews: [],
       });
    }
    // Now there's for sure a movie doc - yay!
    // Code to add the review to the movie doc goes here
    movie.reviews.push(req.body);
    await movie.save();
    res.json(movie);
}