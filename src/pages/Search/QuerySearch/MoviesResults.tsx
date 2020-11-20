import * as React from 'react'
import HorizontalMovieCard from "../../../components/MovieCard/HorizontalMovieCard";
import MoviesList from "../../Movies/MoviesList";
import ShowMoreBtn from "../../../components/common/UI/ShowMoreBtn";


interface IMoviesResultsProps {
    movies: any,
    clear: () => {},
    findMovies: (page: string) => {},
    findMoviesUpdate: (page: string) => {},
    value: string
}

interface IMoviesResultsState {
    page: number
}

const MoviesResults: React.FC<IMoviesResultsProps> = ({
                                                          clear,
                                                          value,
                                                          movies,
                                                          findMovies,
                                                          findMoviesUpdate
}) => {

    const [page,setPage] = React.useState(2)

    const showMoreHandler = () => {
        findMoviesUpdate(String(page))
        setPage(page+1)
    }

    React.useEffect(() =>
    {
        findMovies('1')
        return () => {
            //clear movie search results
            clear()
        }
    },[])

    React.useEffect(() =>
    {
        findMovies('1')
        // обновить счетчик
        setPage(2)
    },[value])

    return (
        <>
            {movies && movies.results[0] &&
                <div>
                    <MoviesList movies={movies.results}/>
                    {!Boolean(movies.total_pages + 1 <= page) && <ShowMoreBtn handler={showMoreHandler} /> }
                </div>
            }
        </>

    )
}

export default MoviesResults;