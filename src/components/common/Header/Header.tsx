import * as React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login/Login'
import Search from "../../Search/Search"
import { Spinner } from 'reactstrap';
import Nav from './Nav'
import SearchField from "../../../pages/Search/SearchField";
import {AppStateType} from "../../../redux/reducers";
import {connect} from 'react-redux';
import {searchActions} from "../../../redux/actions/searchActions";
import {Dispatch} from "redux";

type HeaderProps = {
    isHiddenSearchField: boolean,
    search: string,
    updateSearchValue: (val: string) => {},
    toggleSearchField: () => {}
}
type HeaderState = {}

type SearchProps = {

}

class Header extends React.Component<HeaderProps,HeaderState> {

    toggleShowSearch(e:any) {
        e.preventDefault()
        this.props.toggleSearchField();
    }
    render() {
        const {search,updateSearchValue,isHiddenSearchField} = this.props
        return (
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to="/" className="logo-link">
                                <span>THE MOVIE DB LOGO</span>
                            </Link>
                            <Spinner color="red" />
                        </div>
                        <div className="col">
                            {!isHiddenSearchField && <Nav />}
                            <div>
                                {isHiddenSearchField &&
                                    <SearchField
                                        search={search}
                                        updateSearch={updateSearchValue}
                                    />
                                }

                            </div>
                        </div>
                        <div className="col">
                            <div className="float-right">
                                <button
                                    onClick={(event) =>this.toggleShowSearch(event)}
                                >
                                    TOGGLE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    search: state.search.searchValue,
    isHiddenSearchField: state.search.searchField.isHidden,
})

const mapDispatchToProps =(dispatch: Dispatch) => {
    return ({
        updateSearchValue: (val:string) => dispatch(searchActions.updateSearchValue(val)),
        toggleSearchField: () => dispatch(searchActions.toggleSearchField())
    })
}

export default connect(mapStateToProps,
    mapDispatchToProps
    )(Header);