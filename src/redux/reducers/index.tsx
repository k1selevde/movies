import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MovieReducer from './MovieReducer'
import SearchReducer from './SearchReducer'
import PeopleReducer from './PeopleReducer'


const rootReducer = combineReducers({
    auth: AuthReducer,
    movie: MovieReducer,
    search: SearchReducer,
    people: PeopleReducer
});

type RootReducerType = typeof rootReducer; // (state: AppStateType) => AppStateType

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;