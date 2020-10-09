import {searchActions} from "../actions/searchActions"
import {InferActionsTypes} from "../store";
import {search, searchMovies, searchPeople, oftenPeople, oftenMovies} from "../actions/actionTypes";
import produce from "immer";
import {searchResultMovie, searchResultPerson} from "../../types/types";

const initialState = {
    searchValue: '',
    results: {
        // movies: null as searchResultMovie[] | null,
        // people: null as searchResultPerson[] | null
        oftenPeople: null as null | any,
        oftenMovies: null as null | any,
        movies: null as null | any,
        people: null as null | any
    },
    searchField: {
        isHidden: true
    },
    cache: {
        movies: null as [] | null,
        people: ['Том Круз', 'Джордж Флойд', 'Иван Драго']
    }
}

type InitialStateType = typeof initialState;



const reducer = (state = initialState, action: any): InitialStateType => {
    return produce(state,draftState => {
        switch (action.type) {
            case 'SEARCH/UPDATE_SEARCH':
                draftState.searchValue = action.payload
                break;
            case search.CLEAR:
                draftState.searchValue = ''
                break;
            case 'SEARCH/TOGGLE__SEARCH_FIELD':
                draftState.searchField.isHidden = !state.searchField.isHidden
                break;
            case searchMovies.GET_SUCCESS:
                draftState.results.movies = action.payload
                break;
            case searchPeople.GET_SUCCESS:
                draftState.results.people = action.payload
                break;
            case searchPeople.CLEAR:
                draftState.results.people = null
                break;
            case searchPeople.UPDATE:
                draftState.results.people.results = state.results.people.results.concat(action.payload)
                break;
            case searchMovies.CLEAR:
                draftState.results.movies = null
                break;
            case searchMovies.UPDATE:
                draftState.results.movies.results = state.results.movies.results.concat(action.payload)
                break;
            case oftenPeople.GET__SUCCESS:
                draftState.results.oftenPeople = action.payload
                break;
            case oftenPeople.CLEAR:
                draftState.results.oftenPeople = null
                break;
            case oftenPeople.UPDATE:
                draftState.results.people.results = state.results.people.results.concat(action.payload)
                break;
            case oftenMovies.GET__SUCCESS:
                draftState.results.oftenMovies = action.payload
                break;
            case oftenMovies.UPDATE:
                draftState.results.oftenMovies.results = state.results.oftenMovies.results.concat(action.payload)
                break;
            case oftenMovies.CLEAR:
                draftState.results.oftenMovies = null
                break;
            default:
                return draftState;
        }
    })
}

type SearchActionsType = ReturnType<InferActionsTypes<typeof searchActions>>

export default reducer;