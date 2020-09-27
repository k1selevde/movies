import {Reducer} from 'redux'
import {
    GET_MOVIES_SUCCESS,
} from "../actions/movieActions";

import {
    search,
    genres,
    collection,
    movieDetails,
    movieKeywords,
    movieCredits,
    similarMovies, movieReviews
} from '../actions/actionTypes'
import {
    movieCreditsType,
    movieDetailsType,
    movieKeywordsType,
    movieReviewsResultType,
    similarMoviesResultsType
} from "../../types/types";

type Genre = {
    name: string,
    id: string,
    isSelected: boolean
}

export type CurrentMovieType = typeof initialState.currentMovie;

const initialState = {
    currentMovie: {
        details: null as movieDetailsType | null,
        keywords: null as movieKeywordsType | null,
        credits: null as movieCreditsType | null,
        similarMovies: null as similarMoviesResultsType | null,
        reviews: null as movieReviewsResultType | null
    },
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
            const cat = action.payload.category
            return {
                ...state,
                special_collections: {
                    ...state.special_collections,
                    //@ts-ignore
                    [cat]: [...action.payload.results]
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
        case movieDetails.GET__SUCCESS:
            return {
                ...state,
                currentMovie: {
                    ...state.currentMovie,
                    details: action.payload
                }
            }
        case movieKeywords.GET_SUCCESS:
            return {
                ...state,
                currentMovie: {
                    ...state.currentMovie,
                    keywords: action.payload
                }
            }
        case movieCredits.GET_SUCCESS:
            return {
                ...state,
                currentMovie: {
                    ...state.currentMovie,
                    credits: action.payload
                }
            }
        case similarMovies.GET_SUCCESS:
            return {
                ...state,
                currentMovie: {
                    ...state.currentMovie,
                    similarMovies: action.payload
                }
            }
        case movieReviews.GET__SUCCESS:
            return {
                ...state,
                currentMovie: {
                    ...state.currentMovie,
                    reviews: action.payload
                }
            }
        default: return state;
    }
    //const _enhaustiveCheck: never = action
}


export default reducer;