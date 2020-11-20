import {instance} from "./api";
import {api_key, api_url} from "../constants/default";

import * as queryString from "query-string";
import {AxiosResponse} from "axios";
import {
    CollectionMoviesResponse, CreditsMovieResponse,
    DiscoverMoviesResponse,
    GenresResponse, KeywordsMovieResponse, MovieDetailsType, MoviesVideosType,
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
            include_adult: 'true',
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
            language: 'en-US',
            page
        };

        return instance.get<ReviewsMovieResponse>(`/movie/${id}/reviews?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
    },

    getCredits(id: string) {

        return instance.get<CreditsMovieResponse>(`/movie/${id}/credits?`)
            .then(res => res.data);

    },
    getKeywords(id: string) {

        return instance.get<KeywordsMovieResponse>(`/movie/${id}/keywords?`)
            .then(res => res.data);

    },


    getMovieDetails(id: string) {

        let queryStringParams = {
            language: 'ru-RU',
        };

        return instance.get<MovieDetailsType>(`/movie/${id}?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
      },

     getPosters() {

         return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=4237669ebd35e8010beee2f55fd45546&language=ru-RU&page=1`)
             .then(res =>res.json())
     },
     getVideos(id: string) {

         let queryStringParams = {
             language: 'ru-RU',
         };

        return instance.get<MoviesVideosType>(`/movie/${id}/videos?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
     }
}
