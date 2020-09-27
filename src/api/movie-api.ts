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
    },
    getSimilarMovies(id: string, page: string) {
        /*https://api.themoviedb.org/3/movie/12/similar?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&page=1*/
        return fetch(`${api_url}/movie/${id}/similar?api_key=${api_key}&language=ru-RU&page=${page}`)
            .then(res =>res.json())
    },
    getReviews(id: string, page: string) {
        /*https://api.themoviedb.org/3/movie/12/reviews?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&page=1*/
        return fetch(`${api_url}/movie/${id}/reviews?api_key=${api_key}&language=en-USen-US&page=${page}`)
            .then(res =>res.json())
    },

    getCredits(id: string) {
        /*https://api.themoviedb.org/3/movie/12/credits?api_key=4237669ebd35e8010beee2f55fd45546*/
        return fetch(`${api_url}/movie/${id}/credits?api_key=${api_key}`)
            .then(res =>res.json())
    },
    getKeywords(id: string) {
        /*https://api.themoviedb.org/3/movie/12/keywords?api_key=4237669ebd35e8010beee2f55fd45546*/
        return fetch(`${api_url}/movie/${id}/keywords?api_key=${api_key}`)
            .then(res =>res.json())
    },
    getMovieDetails(id: string) {
        /*https://api.themoviedb.org/3/movie/12?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US*/
        return fetch(`${api_url}/movie/${id}?api_key=${api_key}&language=ru-RU`)
            .then(res =>res.json())
     }
}