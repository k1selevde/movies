import * as React from 'react'
import {similarMoviesResultsType, similarMovieType} from "../../types/types";
import Slider from '../../components/common/Slider'


interface ISimilarMoviesProps {
    id: string,
    movies: similarMovieType[],
    getMovies: ()=> Promise<void>
}

const SimilarMovies :  React.FC<ISimilarMoviesProps> = ({id,movies,getMovies}) => {

    React.useEffect(() => {
        alert('rerender')
        getMovies()
    }, [id])

    return (
        <div className="similarMovies__wrap">
            {movies && movies[0] && <h4 className="similarMovies__title">Похожие фильмы</h4> }
            <div>
                {movies && <Slider moviesArr={movies}/>}
            </div>
        </div>
    )
}


export default SimilarMovies