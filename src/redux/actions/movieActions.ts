import {Dispatch, Action} from "redux"
import {movieApi} from "../../api/movie-api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";
import {
    search,
    genres,
    collection,
    movieDetails,
    movieKeywords,
    similarMovies,
    movieReviews,
    movieCredits, movies
} from './actionTypes'
import {movieKeywordsType} from "../../types/types";


export const GET_GENRES_SUCCESS = 'MOVIE/GET_GENRES_SUCCESS'
export const UPDATE_GENRE = 'MOVIE/UPDATE-GENRE'
export const GET_MOVIES_SUCCESS = 'MOVIE/GET_MOVIE_SUCCESS'





type GenreType = {
     id: number,
     name: string
}

type GenresType = {
    genres: Array<GenreType>
}

export type GetGenresThunk = ThunkAction<void , AppStateType , unknown ,any>
//type GetGenresThunk = ThunkAction<any,any,any,any>


export function getGenresSuccess(payload: GenresType) {
    return {
        type: genres.GET__SUCCESS,
        payload
    }
}

export type UpdateGenresType = typeof updateGenres;

export function updateGenres(payload: string) {
    return {
        type: genres.UPDATE,
        payload
    }
}





export function getMoviesSuccess(data: any) {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: data
    }
}


//===== NEW CODE




export function getCollectionRequest() {
    return {
        type: collection.REQUEST
    }
}

export function getCollectionSuccess(payload: any) {
    return {
        type: collection.GET_SUCCESS,
        payload
    }
}

export function getCollectionFailure(payload: any) {
    return {
        type: collection.GET_FAILURE,
        payload
    }
}

export function clearCollection(payload: string) {
    return {
        type: collection.CLEAR,
        payload
    }
}


//THUNKS

export function getGenres(): GetGenresThunk {
    return async (dispatch: Dispatch) => {
        dispatch({type: 'REQUEST'})
        await movieApi.getGenres()
            .then((res: any) => {
                    console.log('its res : ', res)
                    dispatch(getGenresSuccess(res.genres))
                }
            )
    }
}

export function  getCollection(category: string, page: string) {
    return async (dispatch: Dispatch) => {
        await movieApi.getCollection(category,page)
            .then((res: any) =>{
                console.log('We got a popular movies: ', res.results)
                dispatch(getCollectionSuccess({results: res.results,category}))
            })
    }
}


export function getMovies(page: string, sort: string) {
    return async (dispatch: Dispatch) => {
        dispatch({type: 'REQUEST'})
        await movieApi.getMovies(page, sort)
            .then((res: any) => {
                console.log('get movies RES: ',res)
                dispatch(getMoviesSuccess(res))
            })
    }
}

export function getMovieDetails(id: string) {
    return async(dispatch: Dispatch) =>{
        //dispatch()
        await movieApi.getMovieDetails(id)
            .then((res:any) => {
                console.log('We got a movie details: ',res)
                dispatch(getMovieDetailsSuccess(res))
            })
    }
}

export function getMovieDetailsRequest() {
    return({
        type: movieDetails.REQUEST
    })
}

export function getMovieDetailsSuccess(payload: any) {
    return({
        type: movieDetails.GET__SUCCESS,
        payload
    })
}

export function getMovieDetailsFailure(payload: {}) {
    return({
        type: movieDetails.GET__SUCCESS,
        payload
    })
}


export function getMovieKeywordsSuccess(payload: any) {
    return ({
        type: movieKeywords.GET_SUCCESS,
        payload
    })
}

export function getMovieKeywords(id: string) {
    return async(dispatch: Dispatch) =>{
        //dispatch()
        await movieApi.getKeywords(id)
            .then((res:any) => {
                console.log('We got a keywords  : ',res)
                dispatch(getMovieKeywordsSuccess(res.keywords))
            })
    }
}

export function getSimilarMovies(id: string,page: string) {
    return async(dispatch: Dispatch) =>{
        //dispatch()
        await movieApi.getSimilarMovies(id,page)
            .then((res:any) => {
                console.log('We got a similar movies  : ',res)
                dispatch(getSimilarMoviesSuccess(res.results))
            })
    }
}

export function getSimilarMoviesSuccess(payload: any) {
    return ({
        type: similarMovies.GET_SUCCESS,
        payload
    })
}

export function getMovieReviews(id: string,page:string) {
    return async(dispatch: Dispatch) =>{
        //dispatch()
        await movieApi.getReviews(id,page)
            .then((res:any) => {
                console.log('We got a reviews of movie  : ',res)
                dispatch(getMovieReviewsSuccess(res.results))
            })
    }
}

export function getMovieReviewsSuccess(payload: any) {
    return ({
        type: movieReviews.GET__SUCCESS,
        payload
    })
}

export function getMovieCredits(id: string) {
    return async(dispatch: Dispatch) =>{
        //dispatch(
        console.log('moviecredits requst...')
        await movieApi.getCredits(id)
            .then((res:any) => {
                console.log('We got a CREDITS FOR MOVIE : ',res)
                dispatch(getMovieCreditsSuccess(res.cast))
            })
    }
}

export function getMovieCreditsSuccess(payload: any) {
    return ({
        type: movieCredits.GET_SUCCESS,
        payload
    })
}

export function setCurrentPage(payload: any) {
    return ({
        type: movies.SET_CURRENT_PAGE,
        payload
    })
}

export function setCurrentSortOption(payload: any) {
    return ({
        type: movies.SET_CURRENT_SORT_OPTION,
        payload
    })
}