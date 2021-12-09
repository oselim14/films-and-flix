import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }
  window.addEventListener('scroll', function(){
    var header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 130);
  })

  return (
    <>
      <Link to="/" className="Title"><img src="https://i.imgur.com/X8Ywuz6.png" alt="logo" height="100px"/></Link>
      <nav className="header">
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