import sendRequest from "./send-request";


export function create(IMDBid, review){
    return sendRequest(`/api/movies/${IMDBid}/reviews`, 'POST', review);
}