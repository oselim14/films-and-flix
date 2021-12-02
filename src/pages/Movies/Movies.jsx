import React from 'react';
import { useState } from 'react';
import * as moviesAPI from '../../utilities/movies-api';

export default function Movies({movies, setMovies}) {

  const [searchTerm, setSearchTerm] = useState("");

  function search(evt) {
    const newSearch = evt.target.value;
    setSearchTerm(newSearch);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const results = await moviesAPI.search(searchTerm);
    console.log(results);
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
      {movies.map((m, idx)=> (
        <>
        <h1> {m.title}</h1>
        <img src={m.image} alt={m.title} />
        </>
      ))}
    </>
  );
}