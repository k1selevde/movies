import {search, searchMovies, searchPeople} from "./actionTypes";
import {Dispatch} from "redux";
import {movieApi} from "../../api/movie-api";
import {getMovieCreditsSuccess} from "./movieActions";
import {searchApi} from "../../api/search-api";


export const searchActions = {
    updateSearchValue: (val: string) => ({ type: 'SEARCH/UPDATE_SEARCH', payload: val} as const),
    toggleSearchField: () => ({type: 'SEARCH/TOGGLE__SEARCH_FIELD'} as const)
}

export function findMovies(query: string, page: string) {
    return async(dispatch: Dispatch) =>{
        //dispatch()
        console.log('search movies...')
        await searchApi.findMovies(query,page)
            .then((res:any) => {
                console.log('we got a movies by query : ',res)
                dispatch(findMoviesSuccess(res.results))
            })
    }
}

export function findMoviesSuccess(payload: any) {
    return ({
        type: searchMovies.GET_SUCCESS,
        payload
    })
}

export function findMoviesFailure(payload: any) {
    return ({
        type: searchMovies.GET_FAILURE,
        payload
    })
}

export function findPerson(query: string, page: string) {
    return async(dispatch: Dispatch) => {

        await searchApi.findPerson(query,page)
            .then((res:any) => {
                //alert(res.results)
                dispatch(findPeopleSuccess(res.results))
            })
    }
}

export function findPeopleSuccess(payload: any) {
    return ({
        type: searchPeople.GET_SUCCESS,
        payload
    })
}

export function findPersonUpdate(query: string,page:string) {
    return async(dispatch: Dispatch) => {
        console.log('find person update')
        await searchApi.findPerson(query,page)
            .then((res:any)=> {
                dispatch(findPersonUpdateSuccess(res.results))
            })
    }
}

export function findPersonUpdateSuccess(payload:any) {
    return ({
        type: searchPeople.UPDATE,
        payload
    })

}

export function findMoviesUpdate(query: string,page:string) {
    return async(dispatch: Dispatch) => {
        alert('find person update')
        await searchApi.findMovies(query,page)
            .then((res:any)=> {
                dispatch(findMoviesUpdateSuccess(res.results))
            })
    }
}

export function findMoviesUpdateSuccess(payload:any) {
    return ({
        type: searchMovies.UPDATE,
        payload
    })

}


//Clear functions:


export function clearSearchMovies() {
    return ({
        type: searchMovies.CLEAR
    })
}

export function clearSearchPeople() {
    return ({
        type: searchPeople.CLEAR
    })
}