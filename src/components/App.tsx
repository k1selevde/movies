import * as React from "react";
import { RootState } from '../reducers'
import { AppProps }  from '../types/types'
import { connect } from 'react-redux'
import Header from './Header/Header'
import './../css/app.scss'
import NotFound from "./NotFound";
import MoviePage from "./pages/Movie/MoviePage"
import MoviesPage from "./pages/Movies/MoviesPage"
import {Route, Switch} from "react-router-dom"

interface Props {
    load?: boolean
}

interface State {

}

class App extends React.Component<Props,State> {
    render() {
        return (
            <div>
                <Header />
                <div className="content container">
                    <Switch>
                        <Route exact path="/" component={MoviesPage}/>
                        <Route path="/movie/:id" component={MoviePage} />
                        <Route path="*" component={NotFound} />
                    </Switch>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (store: RootState) => {
    return {
    }
}

//export default WithLoading(connect(mapStateToProps, null)(App))
export default App