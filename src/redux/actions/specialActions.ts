import {collection, specialCollection} from "./actionTypes";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";
import {movieApi} from "../../api/movie-api";



export function getSpecialCollectionRequest() {
    return {
        type: specialCollection.REQUEST
    }
}

export function getSpecialCollectionSuccess(payload: any) {
    return {
        type: specialCollection.GET_SUCCESS,
        payload
    }
}

export function getSpecialCollectionFailure(payload: any) {
    return {
        type: specialCollection.GET_FAILURE,
        payload
    }
}

export function  getSpecialCollection(category: string, page: string) : ThunkAction<any, any, any, any>{
    return async (dispatch: Dispatch) => {
        await movieApi.getCollection(category,page)
            .then((res: any) =>{
                console.log('res.results')
                dispatch(getSpecialCollectionSuccess({results: res.results}))
            })
    }
}


export function clearSpecialCollection(payload: string) {
    return {
        type: specialCollection.CLEAR,
        payload
    }
}



