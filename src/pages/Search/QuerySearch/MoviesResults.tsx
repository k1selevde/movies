import * as React from 'react'
import HorizontalMovieCard from "../../../components/MovieCard/HorizontalMovieCard";


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
            {movies && movies.results && movies.results[0] && <div><h4>Here is movies results</h4>
                <div className="container">
                    <div className="row">
                        {movies.results.map((movie: any) => (
                            <div
                                key={movie.id}
                                className="col-3"
                            >
                                <HorizontalMovieCard movie={movie}/>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    disabled={movies.total_pages+1 <= page}
                    onClick={showMoreHandler}
                >
                    Показать еще
                </button>
            </div>}
        </>

    )
}

export default MoviesResults;