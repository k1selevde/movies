import * as React from 'react'
import {connect} from 'react-redux'
import SearchField from "./SearchField";
import {AppStateType} from "../../redux/reducers";
import {Dispatch} from 'redux';
import {searchActions} from "../../redux/actions/searchActions";


// Похожие props
type SearchProps = {
    value: string,
    searchValue: string,
    updateSearchValue: (search: string) => {}
}
type SearchState = {
}

class SearchPage extends React.Component<SearchProps,SearchState> {
    state = {}
    render() {
        const {searchValue,updateSearchValue} = this.props;
        return (
            <div>
                <h3
                    className="search__title"
                >
                    Результаты поиска
                </h3>
               {/* <SearchField
                    search={searchValue}
                    updateSearch={updateSearchValue}
                />*/}
            </div>

        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    searchValue: state.search.searchValue
})


export default connect(mapStateToProps,{updateSearchValue: searchActions.updateSearchValue})(SearchPage)