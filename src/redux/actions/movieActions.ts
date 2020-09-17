import {Dispatch, Action} from "redux"
import {movieApi} from "../../api/movie-api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers";
import {search,genres,collection} from './actionTypes'


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


export function getMovies() {
    return async (dispatch: Dispatch) => {
        dispatch({type: 'REQUEST'})
        await movieApi.getMovies()
            .then((res: any) => {
                console.log('get movies res: ',res)
                dispatch(getMoviesSuccess(res.results))
            })
    }
}


export function getMoviesSuccess(data: any) {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: data
    }
}


//===== NEW CODE

export function updateSearchValue(val: string) {
    return {
        type: search.UPDATE,
        payload: val
    }
}


export function  getCollection(category: string) {
    return async (dispatch: Dispatch) => {
        await movieApi.getCollection(category)
            .then((res: any) =>{
                console.log('We got a popular movies: ', res)
                dispatch(getCollectionSuccess({results: res.results,category}))
            })
    }
}


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