import * as React from 'react';
import {people} from "../actions/actionTypes";
import {PersonDetailsType} from "../../types/types";

let initialState = {
    details: null as PersonDetailsType | null,
    error: null as string | null
}

type InitialStateType = typeof initialState;

const reducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case people.GET_DETAILS_SUCCESS:
            return {
                ...state,
                details: action.payload
            }
        case people.GET_DETAILS_FAILURE:
            return {
                ...state,
                error: 'bad'
            }
        case people.CLEAR:
            return {
                ...state,
                details: null
            }
        default: return state;
    }
}

export default reducer;