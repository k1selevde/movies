import {instance} from "./api";
import {api_key, api_url} from "../constants/default";

import * as queryString from "query-string";
import {AxiosResponse} from "axios";
import {
    CollectionMoviesResponse, CreditsMovieResponse,
    DiscoverMoviesResponse,
    GenresResponse, KeywordsMovieResponse, MovieDetailsType,
    ReviewsMovieResponse,
    SimilarMoviesResponse
} from "../types/types";


export const movieApi = {

    getGenres() {
        let queryStringParams = {
            language: 'ru-RU'
        }
        return instance.get<GenresResponse>(`/genre/movie/list?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
    },



    getMovies(page: string, filters: {}) {
        let queryStringParams = {
            language: 'ru-RU',
            ...filters
        };

        return instance.get<DiscoverMoviesResponse>(`/discover/movie?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
    },


    getCollection(category: string, page: string) {
        let queryStringParams = {
            language: 'ru-RU',
            page
        };

        return instance.get<CollectionMoviesResponse>(`/movie/${category}?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
    },


    getSimilarMovies(id: string, page: string) {
        let queryStringParams = {
            language: 'ru-RU',
            page
        };

        return instance.get<SimilarMoviesResponse>(`/movie/${id}/similar?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
    },

    getReviews(id: string, page: string) {
        let queryStringParams = {
            language: 'ru-RU',
            page
        };

        return instance.get<ReviewsMovieResponse>(`/movie/${id}/reviews?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
    },

    getCredits(id: string) {

        return instance.get<CreditsMovieResponse>(`/movie/${id}/credits?`)
            .then(res => res.data);

        /*https://api.themoviedb.org/3/movie/12/credits?api_key=4237669ebd35e8010beee2f55fd45546*/
/*        return fetch(`${api_url}/movie/${id}/credits?api_key=${api_key}`)
            .then(res =>res.json())*/
    },
    getKeywords(id: string) {

        return instance.get<KeywordsMovieResponse>(`/movie/${id}/keywords?`)
            .then(res => res.data);

        /*https://api.themoviedb.org/3/movie/12/keywords?api_key=4237669ebd35e8010beee2f55fd45546*/
/*        return fetch(`${api_url}/movie/${id}/keywords?api_key=${api_key}`)
            .then(res =>res.json())*/
    },


    getMovieDetails(id: string) {

        let queryStringParams = {
            language: 'ru-RU',
        };

        return instance.get<MovieDetailsType>(`/movie/${id}?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
      },

     getPosters() {

        /*https://api.themoviedb.org/3/movie/now_playing?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&page=1*/
         return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=4237669ebd35e8010beee2f55fd45546&language=ru-RU&page=1`)
             .then(res =>res.json())
     }
}
