import {api_key, api_url} from "../constants/default";
import {instance} from "./api";
import {MovieDetailsType, PersonDetailsType} from "../types/types";
import * as queryString from "query-string";

export const peopleApi = {

    getDetails(id: string) {
        /*https://api.themoviedb.org/3/person/12?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US*/

        let queryStringParams = {
            language: 'en-EN',
        };

        return instance.get<PersonDetailsType>(`/person/${id}?${queryString.stringify(queryStringParams)}`)
            .then(res => res.data);

    }
}