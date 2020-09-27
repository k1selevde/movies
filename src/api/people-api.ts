import {api_key, api_url} from "../constants/default";

export const peopleApi = {
    /*https://api.themoviedb.org/3/person/12?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US*/
    getDetails(id: string) {
        return fetch(`${api_url}/person/${id}?api_key=${api_key}&language=en-US`)
            .then(res => res.json())
    }
}