import React, {useEffect} from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import * as moviesAPI from '../../utilities/movies-api';
import './Movies.css';

export default function Movies({movies, setMovies}) {

  const [searchTerm, setSearchTerm] = useState("");
  const [movieId, setMovieId] = useState("");

    function search(evt) {
      const newSearch = evt.target.value;
      setSearchTerm(newSearch);
    }

    async function handleSubmit(evt) {
      evt.preventDefault();
      const results = await moviesAPI.search(searchTerm);
      setMovies(results);
    }
 

  return (
    <>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={search} value={searchTerm} required />
        <button type="submit" value="submit">
          Search
        </button>
      </form>
      <div className="MovieSearch">
        {movies.map((m)=> (
          <Link to={`/movies/${m.id}`} key={m.id}>
            <div className="SearchPosters">
              <h1> {m.title}</h1>
              <img src={m.image} alt={m.title} width="300" />
            </div>
          </Link> 
        ))}
      </div>
    </>
  );
}