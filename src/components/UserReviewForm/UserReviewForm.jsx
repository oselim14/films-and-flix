import React, { Component, useState } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api';
import { Link } from 'react-router-dom';

export default function ReviewForm({viewMovie, setViewMovie}){

    const [review, setReview] = useState('');
    const [rating, setRating] = useState('5');

    async function addReview(evt) {
        evt.preventDefault();
        const updatedMovie = await reviewsAPI.create({
            movieId: viewMovie._id,
            review,
            rating
        });
        setViewMovie(updatedMovie);
        setReview('');
        setRating('5')
    }

    return(
        <>
            <form onSubmit={addReview} className="ReviewForm">
                <label>Rating:
                    <select name="rating" value={rating} onChange={(evt)=> setRating(evt.target.value)}>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </label>
                <label>Review
                <input type="text" name="review" value={review} onChange={(evt)=> setReview(evt.target.value)} /> </label>
                <button type="submit">Submit Review</button>
            </form>
        </>
    )
}