import * as React from "react";
import {Dispatch} from "redux";
import {Route, Switch} from "react-router-dom";
import {AppStateType} from '../redux/reducers'
import { AppProps }  from '../types/types'
import { connect } from 'react-redux'
import Header from './common/Header/Header'
import NotFound from "./common/NotFound";
import MoviePage from "../pages/Movie/MoviePage"
import MoviesPage from "../pages/Movies/MoviesPage"
import {authApi} from "../api/auth-api";
import {setAccountDetails, AccountDetailsType, authMe} from "../redux/actions/authActions";
import './../css/app.scss'
import MainPage from "../pages/Main/MainPage";
import SearchPage from "../pages/Search/QuerySearch/QuerySearchPage";
import SearchHint from "./common/SearchHint";
import SpecialPage from '../pages/Special/SpecialPage'
import PeoplePage from "../pages/Person/PersonPage";
import Routes from './Routes'
import cn from 'classnames'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface IAppProps {
    authMe: () => {}
    isHiddenSearchField: boolean
}

interface IAppState {
    userData: {
        password: string,
        username: string
    }
}

class App extends React.Component<IAppProps & RouteComponentProps,IAppState> {

    state = {
        userData: {
            password: '123',
            username: 'belka'
        }
    }

    componentDidMount(): void {
        //this.props.authMe()
    }

    componentDidUpdate(): void {
        console.log('CONTENT BLUR: ',(this.props.isHiddenSearchField && ( (!location.pathname.includes('search')) && (!location.pathname.includes('movie/')) && (!location.pathname.includes('people'))) ))
    }

    render() {
        const {isHiddenSearchField,location} = this.props
        return (
            <div>
                <Header />
                <div className={cn('content',
                    {'content-blur': Boolean(isHiddenSearchField && ( (!location.pathname.includes('search')) && (!location.pathname.includes('movie/')) && (!location.pathname.includes('people'))) )}
                )}>
                    <div
                        className="container">
                        <Routes/>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isHiddenSearchField: state.search.searchField.isHidden
})



//export default WithLoading(connect(mapStateToProps, null)(App))
export default connect(mapStateToProps,{authMe} )(withRouter(App));