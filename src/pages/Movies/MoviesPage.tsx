import * as React from 'react'
import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {getMovies,setCurrentPage,setCurrentSortOption} from "../../redux/actions/movieActions";
import {AppStateType} from '../../redux/reducers';
import Filters from "../../components/Filters/Filters";
import MoviesList from "./MoviesList";


import Paginator from "../../components/common/UI/Paginator/Paginator"
import {collectionMovie} from "../../types/types";
import {currentFiltersType} from "../../redux/reducers/MovieReducer";

interface IMoviesPageProps {
    movies: collectionMovie[]
    getMovies: (page: string,sort: string) => Promise<void>
    setCurrentPage: (page: string) => {}
    setCurrentSortOption: (option: string) => {}
    currentFilters: currentFiltersType
}

const MoviesPage : React.FC<IMoviesPageProps>  = ({movies,
                                                      currentFilters: {currentPage,sort_option,totalPages},
                                                      getMovies,
                                                      setCurrentPage,
                                                      setCurrentSortOption,
                                                  }) =>
    {
        React.useEffect(() => {
                getMovies(String(currentPage),sort_option)
            },
            [])
        React.useEffect(() => {
                getMovies(String(currentPage),sort_option)
            },
            [currentPage,sort_option])
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <Filters
                            setCurrentSortOption={setCurrentSortOption}
                        />
                    </div>
                    <div className="col-9">
                        <MoviesList
                            movies={movies}/>
                        <Paginator
                            totalItemsCount = {totalPages}
                            pageSize = {20}
                            currentPage = {1}
                            portionSize = {3}
                            setPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        )
    }

const mapStateToProps = (state: AppStateType) => {
    return ({
        movies: state.movie.moviesList,
        currentFilters: state.movie.currentFilters,
    })
}

//@ts-ignore
export default connect(mapStateToProps,{getMovies, setCurrentPage, setCurrentSortOption})(MoviesPage)