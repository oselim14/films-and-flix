import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './NavBar.css';

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
      <Link to="/movies/myreviews">My Reviews</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {props.user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    </>
  );
} 