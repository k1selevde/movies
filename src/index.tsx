import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById("root")
);
