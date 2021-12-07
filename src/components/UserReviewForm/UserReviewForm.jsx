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

    async function deleteReview(id){
        const review = await reviewsAPI.deleteReview({id});
        setViewMovie(review);
    }

    return(
        <>
        <div className="ReviewForm">
            <h2>Add a Review:</h2>
                <form onSubmit={addReview} >
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
        </div>
            <h1>Reviews:</h1>
            <div className="ReviewTable"><span>User</span><span>Review</span><span>Rating</span><span>Delete</span></div>
            {viewMovie.reviews.map((r, idx) => 
                <div className="ReviewMiddle"><span>{r.userName}</span><span>{r.review}</span><span>{r.rating}</span><button onClick={() => deleteReview(r._id)}>X</button></div>
            )}
        </>
    )
}