import {searchActions} from "../actions/searchActions"
import {InferActionsTypes} from "../store";
import {search} from "../actions/actionTypes";

const initialState = {
    searchValue: '',
    searchField: {
        isHidden: true
    }
}

type InitialStateType = typeof initialState;

const reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case search.UPDATE:
            return {
                ...state,
                searchValue: action.payload
            }
        default: return state;
    }
    //const _exhaustiveCheck: never = action
}

type ActionsType = InferActionsTypes<typeof searchActions>

export default reducer;