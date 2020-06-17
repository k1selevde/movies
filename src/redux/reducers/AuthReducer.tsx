import {act} from "react-dom/test-utils";

const initialState = {
    session_id: '',
    isLoading: true
}

export default (state = initialState,action: any) => {
    switch(action.type) {
        case 'SET_USER':
            return {...state, session_id: action.payload}
        default:
            return state;
    }
}