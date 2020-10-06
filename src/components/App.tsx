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
import Popup from 'reactjs-popup';
import SpecialPage from '../pages/Special/SpecialPage'
import PeoplePage from "../pages/Person/PersonPage";
import Routes from './Routes'



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

class App extends React.Component<IAppProps,IAppState> {

    state = {
        userData: {
            password: '123',
            username: 'belka'
        }
    }

    componentDidMount(): void {
        //this.props.authMe()
    }

    render() {
        const {isHiddenSearchField} = this.props
        return (
            <div>
                <Header />
                <div className="content container">
                    <Popup
                        position="bottom center"
                        trigger={<button className="button"> Open Modal </button>}
                    >
                        <div style={{background: 'blue'}}>Popup content here !!</div>
                    </Popup>
                    <Routes/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isHiddenSearchField: state.search.searchField.isHidden
})



//export default WithLoading(connect(mapStateToProps, null)(App))
export default connect(mapStateToProps,{authMe} )(App);