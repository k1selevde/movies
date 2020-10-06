import {api_key, api_url} from "../constants/default";
import {instance} from "./api";
import {
    SearchMoviesResponse,
    SearchOftenMoviesResponse,
    SearchOftenPeopleResponse,
    SearchPeopleResponse
} from "../types/types";
import * as queryString from "query-string";


export const searchApi = {
    findMovies(query: string,page: string) {

        let queryStringParams = {
            language: 'en-US',
            query,
            page,
            include_adult: false
        };

        return instance.get<SearchMoviesResponse>(`/search/movie?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);


        /*
https://api.themoviedb.org/3/search/movie?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&query=tom&page=1&include_adult=false*/
/*        return fetch(`${api_url}/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`)
            .then((res)=> res.json())*/
    },
    findPerson(query: string, page: string) {

        let queryStringParams = {
            language: 'en-US',
            query,
            page,
            include_adult: false
        };

        return instance.get<SearchPeopleResponse>(`/search/person?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);

    },

    findOftenPeople(page: string) {

        let queryStringParams = {
            language: 'en-US',
            page,
        };

        return instance.get<SearchOftenPeopleResponse>(`/person/popular?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);

    },


    findOftenMovies(page: string) {
        let queryStringParams = {
            language: 'en-US',
            page,
        };

        return instance.get<SearchOftenMoviesResponse>(`/movie/popular?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);
    }
}