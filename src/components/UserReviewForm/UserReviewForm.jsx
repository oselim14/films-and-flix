import React, { useState } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api';

export default function ReviewForm({viewMovie, setViewMovie, user}){
    
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
                {user ? 
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
                :
                <h3>Please Log In to Leave a Review</h3>
                }
        </div>
            <div className="ReviewsDisplay">
                <h1 className="ReviewsTitle">Reviews:</h1>
                    <>
                    <table className="ReviewsTable">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Review</th>
                                <th>Rating</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewMovie.reviews.map((r, idx) => (
                            <tr key={idx}>
                                <td>{r.userName}</td>
                                <td>{r.review}</td>
                                <td className="Rating">{r.rating}</td>
                                <td className="DeleteButton">{user ? (user._id === r.user) ? (<button onClick={() => deleteReview(r._id)}>X</button>): <div className="NotUser"></div> : ''  }</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </>
            </div>
        </>
    )
}