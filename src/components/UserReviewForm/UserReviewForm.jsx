import React, { Component, useState } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api';
import { Link, useNavigate } from 'react-router-dom';

export default function ReviewForm({viewMovie, idx}){

    const [review, setReview] = useState({
        rating: '5',
        review: '',
    });

    const navigate = useNavigate();

    function handleChange(evt) {
        setReview(evt.target.value);
    }

    async function addReview(movieId) {
        // const reviews = {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({reviews})
        // };
        const res = await reviewsAPI.create(movieId);
        setReview(res);
    }

    return(
        <>
            <form onSubmit={() => addReview(viewMovie._id)} className="ReviewForm">
                <label>Rating:
                    <select name="rating" value={review.rating} onChange={handleChange}>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </label>
                <label>Review
                <input type="text" name="review" value={review.review} onChange={handleChange} /> </label>
                <button type="submit">Submit Review</button>
            </form>
        </>
    )
}