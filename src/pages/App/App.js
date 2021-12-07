import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import MyReviews from '../MyReviews/MyReviews';
import Movies from '../Movies/Movies';
import NavBar from '../../components/NavBar/NavBar';
import MovieDetailPage from '../../pages/MovieDetailPage/MovieDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [movies, setMovies] = useState([]);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/movies" element={<Movies movies={movies} setMovies={setMovies}/>} />
            <Route path="/" element={<HomePage movies={movies} setMovies={setMovies}/>} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/movies/myreviews" element={<MyReviews />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
