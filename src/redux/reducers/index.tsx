import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MovieReducer from './MovieReducer'
import SearchReducer from './SearchReducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    movie: MovieReducer,
    search: SearchReducer
});

type RootReducerType = typeof rootReducer; // (state: AppStateType) => AppStateType

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;