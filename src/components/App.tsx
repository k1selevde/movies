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
import {setAccountDetails, AccountDetailsType} from "../redux/actions/authActions";
import './../css/app.scss'
import MainPage from "../pages/Main/MainPage";
import SearchPage from "../pages/Search/Search";
import SearchHint from "./common/SearchHint";
import Popup from 'reactjs-popup';
import SpecialPage from '../pages/Special/SpecialPage'
interface Props {
    setAccountDetails: (id: any) => {},
    isHiddenSearchField: boolean
}

interface State {
    userData: {
        password: string,
        username: string
    }
}

class App extends React.Component<Props,State> {

    state = {
        userData: {
            password: '123',
            username: 'belka'
        }
    }

    componentDidMount(): void {
        const {password, username} = this.state.userData;
        /*authApi.getRequestToken()
                .then(data  => authApi.validateTokenWithLogin(username, password, data.data.request_token))
                .then(data => authApi.getSessionId(data.data.request_token))
                .then(data => authApi.getAccountDetails(data.data.session_id))
                .catch(e => console.log('error:!11',e))*/
        let url = 'https://api.themoviedb.org/3'
        let key = '4237669ebd35e8010beee2f55fd45546'
        fetch(`${url}/authentication/token/new?api_key=${key}`)
            .then(res => res.json())
            .then(data => {
                console.log('req_token: ',data.request_token)
                fetch(`${url}//authentication/token/validate_with_login?api_key=${key}`, {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                        username: "belka",
                        password: "zxcvbn",
                        request_token: data.request_token
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('req_token again: ',data.request_token)
                        fetch( `${url}/authentication/session/new?api_key=${key}`, {
                            method: 'POST',
                            mode: 'cors',
                            body: JSON.stringify({
                                request_token: data.request_token
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('session_id: ', data.session_id)
                                const session_id = data.session_id;
                                return fetch(`${url}/account?api_key=${key}&session_id=${data.session_id}`)
                            })
                            .then(res => res.json())
                            .then(data => {
                                let id = data.id;
                                this.props.setAccountDetails({id})
                            })
                    })
            })
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

                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/movies" component={MoviesPage}/>
                        <Route path="/search/:value" render={({match}) =>
                        {
                            let {value} = match.params;
                            return <SearchPage value={value} />
                        }}
                        />
                        <Route path="/special/:query" component={SpecialPage}/>
                        <Route path="/movie/:id" render={({match}) =>
                        {
                            let {id} = match.params
                            return <MoviePage id={id}/>
                        }}
                        />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isHiddenSearchField: state.search.searchField.isHidden
})



const mapDispatchToProps = (dispatch: Dispatch) => {
    return ({
        setAccountDetails: (data: AccountDetailsType) => dispatch(setAccountDetails(data))
    })
}

//export default WithLoading(connect(mapStateToProps, null)(App))
export default connect(mapStateToProps,mapDispatchToProps )(App);