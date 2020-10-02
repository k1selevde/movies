import {Dispatch} from "redux";
import {peopleApi} from "../../api/people-api";
import {people} from "./actionTypes";


export const peopleActions = {
    getDetails: () => {}
}

export function getDetails(id: string) {
    return async (dispatch: Dispatch) => {

        await peopleApi.getDetails(id)
            .then((res:any) => {
                dispatch(getDetailsSuccess(res))
            })
    }
}

export function getDetailsSuccess(payload: any) {
    return ({
        type: people.GET_DETAILS_SUCCESS,
        payload
    })
}

export function getDetailsFailure(payload: any) {
    return ({
        type: people.GET_DETAILS_FAILURE,
        payload
    })
}

export function cleanPeopleDetail() {
    return ({
        type: people.CLEAR
    })
}

