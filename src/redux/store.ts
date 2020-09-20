import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

const store = createStore(rootReducer,
    localStorage.getItem('movie-app') ? JSON.parse(localStorage['movie-app']) : {},
    compose(applyMiddleware(thunk,logger), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()))

export default store