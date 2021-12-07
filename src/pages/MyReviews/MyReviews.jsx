import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import * as reviewsAPI from '../../utilities/reviews-api';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './MyReviews.css';

export default function MyReviews() {

  const [pastReviews, setPastReviews] = useState([]);

  useEffect(function() {
    async function getPastReview() {
      const pastReviews = await reviewsAPI.getReviews();
      setPastReviews(pastReviews);
    }
    getPastReview();
  }, []);


  return (
    <>
      <h1 className="MovieReviews">My Reviews</h1>
      <div className="MainPortionReviews">
        <div className="MovieSearchReviews">
          {pastReviews.map((m)=> 
            <div className="SearchPostersReviews">
              <Link to={`/movies/${m.IMDBid}`} key={m.IMDBid}>
                <h1>{m.title}</h1>
                <img src={m.image} alt={m.title} width="300" />
              </Link>
              <ReviewCard movie={m} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}