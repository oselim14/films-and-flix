import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './NavBar.css';
import AuthPage from '../../pages/AuthPage/AuthPage';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <>
    <Link to="/" className="Title">Films&Flix</Link>
    <nav>
      <Link to="/movies">Movies</Link>
      &nbsp; | &nbsp;
      { props.user  ?
      <Link to="/movies/myreviews">My Reviews</Link>
      :
      <Link to="/login">My Reviews</Link>
      }
      &nbsp; | &nbsp;
      <span>Welcome, {props.user ? `${props.user.name}` : "Please Sign In"} </span>
      &nbsp; | &nbsp;
      { props.user ?
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      :
      <Link to="/login">Log In</Link>
      }
    </nav>
    </>
  );
} 