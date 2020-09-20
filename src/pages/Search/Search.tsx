import * as React from 'react'
import {connect} from 'react-redux'
import SearchField from "./SearchField";
import {AppStateType} from "../../../redux/reducers";
import {Dispatch} from 'redux';
import {updateSearchValue} from "../../../redux/actions/movieActions";


// Похожие props
interface Props {
    searchValue: string,
    updateSearchValue: (search: string) => {}
}
interface State {
}

class SearchPage extends React.Component<Props,State> {
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
                <SearchField
                    search={searchValue}
                    updateSearch={updateSearchValue}
                />
            </div>

        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    searchValue: state.movie._search
})
const mapDispatchToProps = (dispatch: Dispatch) => {
    return({
        updateSearchValue: (search: string) => dispatch(updateSearchValue(search))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)