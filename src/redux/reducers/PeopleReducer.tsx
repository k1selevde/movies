import * as React from 'react';
import {people} from "../actions/actionTypes";
import {PersonDetailsType} from "../../types/types";
import produce from "immer";
let initialState = {
    details: null as PersonDetailsType | null,
    error: null as string | null
}

type InitialStateType = typeof initialState;

const reducer = (state = initialState, action: any): InitialStateType => {
    return produce(state,draftState => {
        switch (action.type) {
            case people.GET_DETAILS_SUCCESS:
                draftState.details = action.payload
                break;
            case people.GET_DETAILS_FAILURE:
                draftState.error = 'bad'
                break;
            case people.CLEAR:
                draftState.details = null
                break;
            default:
                return draftState;
        }
    })
}

export default reducer;