import {searchActions} from "../actions/searchActions"
import {InferActionsTypes} from "../store";
import {search, searchMovies, searchPeople} from "../actions/actionTypes";
import {searchResultMovie, searchResultPerson} from "../../types/types";

const initialState = {
    searchValue: '',
    results: {
        movies: null as searchResultMovie[] | null,
        people: null as searchResultPerson[] | null
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

/*
 UPDATE: 'SEARCH/UPDATE_SEARCH',
    TOGGLE__SEARCH_FIELD: 'SEARCH/TOGGLE__SEARCH_FIELD'
* */

const reducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case 'SEARCH/UPDATE_SEARCH':
            return {
                ...state,
                searchValue: action.payload
            }
        case 'SEARCH/TOGGLE__SEARCH_FIELD':
            return {
                ...state,
                searchField: {
                    ...state.searchField,
                    isHidden: !state.searchField.isHidden
                }
            }
        case searchMovies.GET_SUCCESS:
            return {
                ...state,
                results: {
                    ...state.results,
                    movies: action.payload
                }
            }

        case searchPeople.GET_SUCCESS:
            return {
                ...state,
                results: {
                    ...state.results,
                    people: action.payload
                }
            }
        case searchPeople.CLEAR:
            return {
                ...state,
                results: {
                    ...state.results,
                    people: null
                }
            }
        case searchPeople.UPDATE:
            return {
                ...state,
                results: {
                    ...state.results,
                    people: [...state.results.people, ...action.payload]
                }
            }
        case searchMovies.CLEAR:
            return {
                ...state,
                results: {
                    ...state.results,
                    movies: null
                }
            }
        case searchMovies.UPDATE:
            return {
                ...state,
                results: {
                    ...state.results,
                    movies: [...state.results.movies,...action.payload]
                }
            }
        default: return state;
    }
    //const _exhaustiveCheck: never = action
}

type SearchActionsType = ReturnType<InferActionsTypes<typeof searchActions>>

export default reducer;