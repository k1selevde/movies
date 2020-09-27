import {api_key, api_url} from "../constants/default";

export const searchApi = {
    findMovies(query: string,page: string) {
        /*
https://api.themoviedb.org/3/search/movie?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&query=tom&page=1&include_adult=false*/
        return fetch(`${api_url}/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`)
            .then((res)=> res.json())
    },
    findPerson(query: string, page: string) {
        alert(query)
        /*https://api.themoviedb.org/3/search/person?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&query=tom&page=1&include_adult=false*/
        return fetch(`${api_url}/search/person?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`)
            .then((res) => res.json())
    }
}