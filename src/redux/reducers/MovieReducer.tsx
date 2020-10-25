import {Reducer} from 'redux'
import {
    GET_MOVIES_SUCCESS,
} from "../actions/movieActions";
import produce from "immer";
import {
    search,
    genres,
    collection,
    movieDetails,
    movieKeywords,
    movieCredits,
    movieVideos,
    similarMovies, movieReviews, movies, posters
} from '../actions/actionTypes'
import {
    movieCreditsType,
    MovieDetailsType,
    movieKeywordsType,
    movieReviewsResultType, MoviesVideosType,
    similarMoviesResultsType
} from "../../types/types";
import {act} from "react-dom/test-utils";
type Genre = {
    name: string,
    id: string,
    isSelected: boolean
}

export type CurrentMovieType = typeof initialState.currentMovie;

const initialState = {
    currentMovie: {
        details: null as MovieDetailsType | null,
        keywords: null as movieKeywordsType | null,
        credits: null as movieCreditsType | null,
        similarMovies: null as similarMoviesResultsType | null,
        reviews: null as movieReviewsResultType | null,
        videos: null as MoviesVideosType | null
    },
    moviesList: [] as Array<{}>,
    genres: [] as Array<Genre>,
    currentFilters: {
        currentPage:  1,
        totalPages: 1,
        sort_option: "popularity.desc"
    },
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
        ['upcoming', 'Набирающие популярность']
    ],
    posters: null as [] |  null,
    special_collections: {
        popular: null as [] | null,
        top_rated: null as [] | null,
        upcoming : null as [] | null,
    },
}

export type specialCollectionType = typeof initialState.special_collections
export type currentFiltersType = typeof initialState.currentFilters
type InitialStateType = typeof initialState;


const reducer: Reducer<InitialStateType> = (state = initialState, action: any): InitialStateType => {
    return produce(state,draftState => {
        switch (action.type) {
            case 'REQUEST':
                return draftState
            case posters.GET_SUCCESS:
                draftState.posters = action.payload
                break;
            case genres.GET__SUCCESS:
                draftState.genres = action.payload.map((genre: {name: string, id: string, isSelected: boolean }) => {
                        genre.isSelected = false
                        return genre
                    })
                break;
            case genres.UPDATE:
                draftState.genres = draftState.genres.map((genre) => {
                    if (genre.name === action.payload) {
                        genre.isSelected = !genre.isSelected
                    }
                    return genre
                })
                break;
            case genres.CLEAR:
                draftState.genres = draftState.genres.map((genre: {name: string, id: string, isSelected: boolean }) => {
                    genre.isSelected = false
                    return genre
                })
                break;
            case GET_MOVIES_SUCCESS:
                draftState.currentFilters.totalPages = action.payload.total_results
                draftState.moviesList = action.payload.results
                break;
            case collection.GET_SUCCESS:
                const cat = action.payload.category
                //@ts-ignore
                const oldArr = state.special_collections[cat] ? state.special_collections[cat] : []
                //@ts-ignore
                draftState.special_collections[cat] = [...oldArr, ...action.payload.results]
                break;
            case collection.CLEAR:
                //@ts-ignore
                draftState.special_collections[action.payload] = []
                break;
            case movieDetails.GET__SUCCESS:
                draftState.currentMovie.details = action.payload
                break;
            case movieKeywords.GET_SUCCESS:
                draftState.currentMovie.keywords = action.payload
                break;
            case movieCredits.GET_SUCCESS:
                draftState.currentMovie.credits = action.payload
                break;
            case similarMovies.GET_SUCCESS:
                draftState.currentMovie.similarMovies = action.payload
                break;

            case movieReviews.GET__SUCCESS:
                draftState.currentMovie.reviews = action.payload
                break;
            case movieVideos.GET_SUCCESS:
                draftState.currentMovie.videos = action.payload
                break;

            case movies.SET_CURRENT_PAGE:
                draftState.currentFilters.currentPage = action.payload
                break;
            case movies.SET_CURRENT_SORT_OPTION:
                draftState.currentFilters.sort_option = action.payload
                break;
            case 'MOVIE/CLEAR_CURRENT_MOVIE':
                draftState.currentMovie = initialState.currentMovie
                break;
            default:
                return draftState;
        }
    })
}


export default reducer;