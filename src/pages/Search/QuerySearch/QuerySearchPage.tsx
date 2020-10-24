import * as React from 'react'
import {connect} from 'react-redux'
import SearchField from "../SearchField";
import {AppStateType} from "../../../redux/reducers";
import {Dispatch} from 'redux';
import {
    clearSearchMovies,findMoviesUpdate,
    clearSearchPeople,
    findMovies,
    findPerson, findPersonUpdate,
    searchActions
} from "../../../redux/actions/searchActions";
import MovieReviews from "../../Movie/MoviePageTabs/MovieReviews";
import MoviesResults from "./MoviesResults";
import PersonResults from "./PersonResults";
import NotFound from "../../../components/common/NotFound";


// Похожие props
type SearchProps = {
    clearSearchMovies: () => {},
    clearSearchPeople: () => {},
    value: string,
    searchValue: string,
    results: {
        movies:  any,
        people:  any
    },
    findPerson: (query: string,page: string) => {},
    findMovies: (query: string, page: string) => {},
    findMoviesUpdate: (query: string, page: string) => {},
    findPersonUpdate: (query: string, page: string) => {},
    updateSearch: (search: string) => {}
}


type SearchState = {}

class QuerySearchPage extends React.Component<SearchProps,SearchState> {
    componentDidMount(): void {
        //update search field;
        let {value} = this.props;
        this.props.updateSearch(value)
    }

    render() {
        const {
            value,
            findMovies,
            findPerson,
            clearSearchMovies,
            clearSearchPeople,
            findPersonUpdate,
            findMoviesUpdate,
            searchValue,
            results: {movies,people}} = this.props;
        return (
            <div>
                <h3
                    className="search__title"
                >
                    Результаты поиска
                </h3>
                <div
                    className="search__resultsBlock"
                >
                    <div>
                        {!(Boolean(movies && movies.results[0]) || Boolean(people && people.results[0])) &&
                            <NotFound
                                textToBack='Простите, по вашему запросу ничего не найдено, попробуйте снова'
                                linkToBack='/search'
                                text=''
                            />
                        }
                    </div>
                    <MoviesResults
                        value={value}
                        findMovies={findMovies.bind(null,value)}
                        findMoviesUpdate={findMoviesUpdate.bind(null,value)}
                        clear={clearSearchMovies}
                        movies={movies}
                    />
                    <h4 style={{marginTop: '15px'}}>Актёры и режиссеры</h4>
                    <PersonResults
                        findPerson={findPerson.bind(null,value)}
                        findPersonUpdate={findPersonUpdate.bind(null,value)}
                        clear={clearSearchPeople}
                        people={people}
                        value={value}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    searchValue: state.search.searchValue,
    results: state.search.results
})


export default connect(mapStateToProps,
    {
        updateSearch: searchActions.updateSearchValue,
        clearSearchMovies: clearSearchMovies,
        clearSearchPeople: clearSearchPeople,
        findPerson: findPerson,
        findMovies: findMovies,
        findPersonUpdate: findPersonUpdate,
        findMoviesUpdate: findMoviesUpdate,
//@ts-ignore
    })(QuerySearchPage)