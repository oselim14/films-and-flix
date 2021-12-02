import sendRequest from './send-request';

const BASE_URL = '/api/movies';
  

export async function search(search) {
    return sendRequest(`${BASE_URL}/search?search=${search}`);
}

