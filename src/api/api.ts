import axios from 'axios';


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.themoviedb.org/3',
    headers: {}
})