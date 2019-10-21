import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function loadPosts () {
    return axios({
        method: 'get',
        url: `${BASE_URL}/posts`,
        config: { headers: {'Content-Type': 'application/json' }}
    });
}

export function causeError () {
    return axios({
        method: 'get',
        url: `${BASE_URL}/error`,
        config: { headers: {'Content-Type': 'application/json' }}
    });
}