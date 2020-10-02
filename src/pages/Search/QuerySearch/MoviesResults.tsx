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

const MoviesResults: React.FC<IMoviesResultsProps> = ({value,movies,findMovies,findMoviesUpdate}) => {
        const [page,setPage] = React.useState(1)

    const showMoreHandler = () => {
       setPage(page+1)
       findMoviesUpdate(String(page))
    }

    React.useEffect(() =>
    {
        findMovies('1')
    },[])

    React.useEffect(() =>
    {
        findMovies('1')
    },[value])

    return (
        <>
            {movies && movies[0] && <div><h4>Here is movies results</h4>
                <div className="container">
                    <div className="row">
                        {movies.map((movie: any) => (
                            <div className="col-3">
                                <HorizontalMovieCard movie={movie}/>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={showMoreHandler}
                >
                    Показать еще
                </button>
            </div>}
        </>

    )
}

export default MoviesResults;