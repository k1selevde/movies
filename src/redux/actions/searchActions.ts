import {search} from "./actionTypes";


export const searchActions = {
    updateSearchValue: (val: string) => ({ type: search.UPDATE, payload: val} as const)
}


