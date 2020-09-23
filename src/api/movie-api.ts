import {instance} from "./api";
import {api_key, api_url} from "../constants/default";

export const movieApi = {
    getGenres() {
        return fetch(`${api_url}/genre/movie/list?api_key=${api_key}&language=ru-Ru`)
            .then(res => res.json())
    },

    getMovies() {
        return fetch(`${api_url}/discover/movie?api_key=${api_key}&language=ru-RU`)
            .then(res => res.json())
    },

    getCollection(category: string, page: number) {
        console.log('query URL: ',`${api_url}/movie/${category}?api_key=${api_key}&language=ru-RU&page=${page}` )
        return fetch(`${api_url}/movie/${category}?api_key=${api_key}&language=ru-RU&page=${page}`)
            .then(res => res.json())
    }
}