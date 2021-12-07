import React, {useEffect} from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import * as moviesAPI from '../../utilities/movies-api';
import './HomePage.css';

export default function HomePage({movies, setMovies}) {

  useEffect(function(){
      async function topMovies(){
          const movie = await moviesAPI.topMovies();
          setMovies(movie);
      }
      topMovies();
  },[])
 

  return (
    <>
      <h1 className="InTheaters">In Theaters:</h1>
      <div className="mainPortion">
      <div className="TopMovies">
      {movies.map((m)=> (
            <Link to={`/movies/${m.id}`} key={m.id}>
              <div className="SearchPosters">
                <h1> {m.title}</h1>
                <img src={m.image} alt={m.title} width="300" />
              </div>
            </Link>
        ))}
      </div>
      </div>
    </>
  );
}