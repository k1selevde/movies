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
import {Genre} from "../../components/Filters/Genres/Genres";

interface IMoviesPageProps {
    movies: collectionMovie[]
    getMovies: (page: string, filters: object) => Promise<void>
    setCurrentPage: (page: number) => {}
    setCurrentSortOption: (option: string) => {}
    currentFilters: currentFiltersType
    genres: Array<Genre>
}

const MoviesPage : React.FC<IMoviesPageProps>  = ({
                                                      genres,
                                                      movies,
                                                      currentFilters: {currentPage,sort_option,totalPages},
                                                      getMovies,
                                                      setCurrentPage,
                                                      setCurrentSortOption,
                                                  }) =>
    {


        React.useEffect(() => {
            //default page:
            return () => {
                setCurrentPage(1)
            }
        }, [])

        // change sort or genres skip page:
        React.useEffect(() => {
            setCurrentPage(1)
        }, [sort_option,genres])


        React.useEffect(() => {
                let currentGenresIds = genres.filter((genre: Genre) => genre.isSelected == true).map((genre: Genre) => genre.id)
                let filters = {
                    sort_by: sort_option,
                    page: String(currentPage),
                    with_genres: currentGenresIds.join(',')
                }
                getMovies(String(currentPage),filters)

            }, [currentPage,sort_option,genres])



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
                            movies={movies}
                        />

                        {movies[0] &&
                            <Paginator
                                sort={sort_option}
                                genres={genres}
                                totalItemsCount = {totalPages}
                                pageSize = {20}
                                currentPage = {currentPage}
                                portionSize = {3}
                                setPage={setCurrentPage}
                            />
                        }

                    </div>
                </div>
            </div>
        )
    }

const mapStateToProps = (state: AppStateType) => {
    return ({
        movies: state.movie.moviesList,
        currentFilters: state.movie.currentFilters,
        genres: state.movie.genres
    })
}

//@ts-ignore
export default connect(mapStateToProps,{getMovies, setCurrentPage, setCurrentSortOption})(MoviesPage)