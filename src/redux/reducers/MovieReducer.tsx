import {Reducer} from 'redux'
import {
    GET_MOVIES_SUCCESS,
} from "../actions/movieActions";

import {search,genres,collection} from '../actions/actionTypes'

type Genre = {
    name: string,
    id: string,
    isSelected: boolean
}


const initialState = {
    moviesList: [] as Array<{}>,
    genres: [] as Array<Genre>,
    filters: {
        data_realise: {},
        sorting: {
            options: [
                {
                    label: "Популярные по убыванию",
                    value: "popularity.desc"
                },
                {
                    label: "Популярные по возростанию",
                    value: "popularity.asc"
                },
                {
                    label: "Рейтинг по убыванию",
                    value: "vote_average.desc"
                },
                {
                    label: "Рейтинг по возростанию",
                    value: "vote_average.asc"
                }
            ]
        },
    },
    collections: [
        ['popular', 'Популярные'],
        ['top_rated', 'С самым большим рейтингом'],
        ['latest', 'Последние'],
        ['upcoming', 'Набирающие популярность']
    ],
    special_collections: {
        popular: null as [] | null,
        top_rated: null as [] | null,
        latest: null as [] | null,
        upcoming : null as [] | null,
    },
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
        case collection.GET_SUCCESS:
            return {
                ...state,
                special_collections: {
                    ...state.special_collections,
                    //@ts-ignore
                    [action.payload.category]: [...state.special_collections[action.payload.category],...action.payload.results]
                }
            }
        case collection.CLEAR:
            return {
                ...state,
                special_collections: {
                    ...state.special_collections,
                    [action.payload]: []
                }
            }
        default: return state;
    }
    //const _enhaustiveCheck: never = action
}


export default reducer;