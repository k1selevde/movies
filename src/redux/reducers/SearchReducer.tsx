import {searchActions} from "../actions/searchActions"
import {InferActionsTypes} from "../store";
import {search} from "../actions/actionTypes";

const initialState = {
    searchValue: '',
    results: null as [] | null,
    searchField: {
        isHidden: true
    },
    cache: {
        movies: null as [] | null,
        people: ['Том Круз', 'Джордж Флойд', 'Иван Драго']
    }
}

type InitialStateType = typeof initialState;

const reducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case search.UPDATE:
            return {
                ...state,
                searchValue: action.payload
            }
        case search.TOGGLE__SEARCH_FIELD:
            return {
                ...state,
                searchField: {
                    ...state.searchField,
                    isHidden: !state.searchField.isHidden
                }
            }
        default: return state;
    }
    //const _exhaustiveCheck: never = action
}

type ActionsType = InferActionsTypes<typeof searchActions>

export default reducer;