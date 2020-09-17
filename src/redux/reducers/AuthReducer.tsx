import {SET_ACCOUNT_DETAILS} from "../actions/authActions";

const initialState = {
    user: {
        id: '',
        session_id: ''
    },
    isLoading: true
}

type AuthStateType = typeof initialState;

export default (state: AuthStateType = initialState,action: any): AuthStateType => {
    switch(action.type) {
        case SET_ACCOUNT_DETAILS:
            return {
                ...state,
                user: {
                    ...state.user,
                    id: action.payload.id,
                    session_id: action.payload.session_id || ''
                }
            }
        default:
            return state;
    }
}