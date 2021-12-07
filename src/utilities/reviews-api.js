import sendRequest from "./send-request";


export function create({movieId, rating, review}){
    return sendRequest(`/api/movies/${movieId}/reviews`, 'POST', {
        review,
        rating
    });
}

export function deleteReview({id}){
    return sendRequest(`/api/reviews/${id}`, 'DELETE')
}