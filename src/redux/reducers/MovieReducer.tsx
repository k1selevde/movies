import {Reducer} from 'redux'
import {
    GET_GENRES_SUCCESS,
    UPDATE_GENRE,
    GET_MOVIES_SUCCESS,

} from "../actions/movieActions";

import {search,genres,collection} from '../actions/actionTypes'
import {collectionMovie} from "../../types/types";

type Genre = {
    name: string,
    id: string,
    isSelected: boolean
}


const initialState = {
    search: 'webbb',
    moviesList: [] as Array<{}>,
    genres: [] as Array<Genre>,
    filters: {
        data_realise: {},
        sorting: [
            {option: 'sort_by_voz'},
            {option: 'sort_by_ybiv'},
        ]
    },
    collections: [
        ['popular', 'популярные'],
        ['top_rated', 'с самым большим рейтингом'],
        ['upcoming', 'набирающие популярность'],
        ['latest', 'последние']
    ],
    special_collections: {
        popular: null as [] | null,
        top_rated: null as [] | null,
        latest: null as [] | null,
        upcoming : null as [] | null,
    },
    curCollection: null as collectionMovie[] | null
}

export type specialCollectionType = typeof initialState.special_collections

type InitialStateType = typeof initialState;
const reducer: Reducer<InitialStateType> = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case 'REQUEST':
            return {
                ...state,
            }

        case genres.GET__SUCCESS:
            return {
                ...state,
                genres: action.payload.map((genre: {name: string, id: string, isSelected: boolean }) => {
                    genre.isSelected =  false
                    return genre;
                })
            }

        case genres.UPDATE:
            return {
                ...state,
                genres: [
                    ...state.genres.map(genre =>
                        {
                            if (genre.name === action.payload) {
                            genre.isSelected = !genre.isSelected;
                        }
                    return genre;
                })
                ]
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                moviesList: action.payload
            }
        case search.UPDATE:
            return {
                ...state,
                search: action.payload
            }
        case collection.GET_SUCCESS:
            return {
                ...state,
                special_collections: {
                    ...state.special_collections,
                    [action.payload.category]: action.payload.results
                }
            }
        default: return state;
    }
}


export default reducer;