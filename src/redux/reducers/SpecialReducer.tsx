
const initialState = {
    currentCollection: null as null | any
}

type InitialStateType = typeof initialState;

const reducer = (state = initialState,action: any) : InitialStateType => {
    switch(action.type) {
        default: return state
    }
}

export default reducer