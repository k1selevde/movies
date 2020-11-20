import * as React from 'react'
import {Link} from 'react-router-dom'
import { Spinner } from 'reactstrap';
import Nav from './Nav'
import SearchField from "../../../pages/Search/SearchField";
import {AppStateType} from "../../../redux/reducers";
import {connect} from 'react-redux';
import {searchActions} from "../../../redux/actions/searchActions";
import {Dispatch} from "redux";
import SearchHint from "../SearchHint";
//@ts-ignore
import LogoIcon from '../../../assets/icons/logo.svg'

// @ts-ignore
import SearchIcon from '../../../assets/icons/search.svg'

// @ts-ignore
import CancelIcon from '../../../assets/icons/cancel.svg'




type IHeaderProps = {
    isHiddenSearchField: boolean,
    search: string,
    updateSearchValue: (val: string) => {},
    toggleSearchField: () => {}
    cachePeople: any[]
    cacheMovies: any[]
}
type HeaderState = {}


class Header extends React.Component<IHeaderProps,HeaderState> {

    toggleShowSearch(e:any) {
        e.preventDefault()
        this.props.toggleSearchField();
    }
    render() {
        const {cacheMovies,cachePeople,search,updateSearchValue,isHiddenSearchField} = this.props
        return (
            <div className="header__main">
                <div className="header__wrap">
                    <div className="container">
                        <div className="header__row">
                            <div className="header__col">
                                <Link to="/" className="logo-link">
                                    <img
                                        className='logo'
                                        src={LogoIcon}
                                        alt="logo"
                                    />
                                </Link>
                                <Spinner color="red"/>
                            </div>
                            <div className="header__col">
                                {!isHiddenSearchField && <Nav/>}
                                <div>
                                    {isHiddenSearchField &&
                                    <SearchField
                                        search={search}
                                        updateSearch={updateSearchValue}
                                    />
                                    }

                                </div>
                            </div>
                            <div className="header__col header__col-right">
                                    <button
                                        className="search__btn"
                                        onClick={(event) => this.toggleShowSearch(event)}
                                    >
                                        <img
                                            className='search__icon'
                                            src={!isHiddenSearchField ? SearchIcon : CancelIcon}
                                            alt="logo"
                                        />
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                <SearchHint cacheMovies={cacheMovies} cachePeople={cachePeople} toggleSearchField={this.props.toggleSearchField} isOpen={isHiddenSearchField} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    search: state.search.searchValue,
    isHiddenSearchField: state.search.searchField.isHidden,
    cachePeople: state.search.cache.people,
    cacheMovies: state.search.cache.movies
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