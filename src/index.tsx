import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './redux/reducers';
import store from './redux/store'
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()'] as typeof compose || compose;


store.subscribe(() => {
    localStorage.setItem('movie-app',JSON.stringify(store.getState()))
})

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById("root")
);
