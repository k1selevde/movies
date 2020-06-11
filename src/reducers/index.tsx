import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MovieReducer from './MovieReducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    movie: MovieReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;