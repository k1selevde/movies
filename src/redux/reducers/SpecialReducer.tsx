import produce from "immer";
import {specialCollection} from "../actions/actionTypes";
import {collectionMovie} from "../../types/types";

const initialState = {
    currentCollection: [] as collectionMovie[]
}

type InitialStateType = typeof initialState;

const reducer = (state = initialState,action: any) : InitialStateType => {
    return produce(state,draftState => {
        switch(action.type) {
            case specialCollection.GET_SUCCESS:
               //draftState.currentCollection = action.payload.results
                draftState.currentCollection = state.currentCollection.concat(action.payload.results)
                break
            case specialCollection.GET_FAILURE:
                return draftState
                break;
            case specialCollection.CLEAR:
                draftState.currentCollection = []
                break;
            default: return state
        }
    })
}

export default reducer