import React, { useState, useEffect } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './MyReviews.css';

export default function MyReviews() {

  const [pastReviews, setPastReviews] = useState([]);
  const [searchParam, setSearchParam] = useState(null);

  useEffect(function() {
    async function getPastReview() {
      const pastReviews = await reviewsAPI.getReviews();
      setPastReviews(pastReviews);
      console.log(pastReviews)
    }
    getPastReview();
  }, []);


  return (
    <>
      <h1>My Reviews</h1>
      {/* <form>
        <label>Rating:
            <select name="rating" value={searchParam}>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
        </label>
      </form> */}
      <div className="MovieSearch">
      {pastReviews.map((m)=> 
        <div className="SearchPosters">
          <h2>{m.title}</h2>
          <img src={m.image} alt={m.title} width="300" />
          <ReviewCard movie={m} />
        </div>
      )}
      </div>
    </>
  );
}