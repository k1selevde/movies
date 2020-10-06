import {Dispatch} from "redux";
import {peopleApi} from "../../api/people-api";
import {people} from "./actionTypes";
import {MovieDetailsType, PersonDetailsType} from "../../types/types";


export const peopleActions = {
    getDetails: () => {}
}

export function getDetails(id: string) {
    return async (dispatch: Dispatch) => {
        await peopleApi.getDetails(id)
            .then((data) => {
                dispatch(getDetailsSuccess(data))
            })
    }
}

export function getDetailsSuccess(payload: PersonDetailsType) {
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

