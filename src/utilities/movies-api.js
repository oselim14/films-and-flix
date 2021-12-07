import sendRequest from './send-request';

const BASE_URL = '/api/movies';
  

export async function search(search) {
    return sendRequest(`${BASE_URL}/search?search=${search}`);
}

export async function topMovies() {
    return sendRequest(`${BASE_URL}`);
}

export async function detail(id){
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function addMovie(id){
    return sendRequest(`${BASE_URL}/${id}`);
}
