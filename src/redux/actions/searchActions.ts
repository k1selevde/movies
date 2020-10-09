import {oftenMovies, oftenPeople, search, searchMovies, searchPeople} from "./actionTypes";
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
            .then((data) => {
                dispatch(findMoviesSuccess(data))
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

        //dispatch(clearSearchPeople())
        await searchApi.findPerson(query,page)
            .then((data) => {
                dispatch(findPeopleSuccess(data))
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
            .then((data)=> {
                dispatch(findPersonUpdateSuccess(data.results))
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
            .then((data)=> {
                dispatch(findMoviesUpdateSuccess(data.results))
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

export function clearOftenSearchPeople() {
    return ({
        type: oftenPeople.CLEAR
    })
}

export function clearOftenSearchMovies() {
    return ({
        type: oftenMovies.CLEAR
    })
}




/*search often looking */
export function findOftenPeopleSuccess(payload: any) {
    return ({
        type: oftenPeople.GET__SUCCESS,
        payload
    })
}

export function updateOftenPeopleSuccess(payload: any) {
    return ({
        type: oftenPeople.UPDATE,
        payload
    })
}


export function findOftenPeople(page:string) {
    return async(dispatch: Dispatch) => {
        alert('find OFTEN person update')
        await searchApi.findOftenPeople(page)
            .then((data)=> {
                dispatch(findOftenPeopleSuccess(data))
            })
    }
}

export function updateOftenPeople(page:string) {
    return async(dispatch: Dispatch) => {
        alert('update OFTEN person update')
        await searchApi.findOftenPeople(page)
            .then((data)=> {
                dispatch(updateOftenPeopleSuccess(data))
            })
    }
}

// search often looking movies here

export function findOftenMoviesSuccess(payload: any) {
    return ({
        type: oftenMovies.GET__SUCCESS,
        payload
    })
}

export function updateOftenMoviesSuccess(payload: any) {
    return ({
        type: oftenMovies.UPDATE,
        payload
    })
}


export function findOftenMovies(page:string) {
    return async(dispatch: Dispatch) => {
        await searchApi.findOftenMovies(page)
            .then((data)=> {
                dispatch(findOftenMoviesSuccess(data))
            })
    }
}

export function updateOftenMovies(page:string) {
    return async(dispatch: Dispatch) => {
        alert('update OFTEN person update')
        await searchApi.findOftenMovies(page)
            .then((data)=> {
                dispatch(updateOftenMoviesSuccess(data.results))
            })
    }
}
