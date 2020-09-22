import {search} from "./actionTypes";


export const searchActions = {
    updateSearchValue: (val: string) => ({ type: search.UPDATE, payload: val} as const),
    toggleSearchField: () => ({type: search.TOGGLE__SEARCH_FIELD} as const)
}

