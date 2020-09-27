import * as React from 'react'
import {similarMoviesResultsType, similarMovieType} from "../../types/types";

interface ISimilarMoviesProps {
    movies: similarMovieType[],
    getMovies: ()=> Promise<void>
}

class SimilarMovies extends React.PureComponent<ISimilarMoviesProps> {
    componentDidMount(): void {
        this.props.getMovies()
    }

    render() {
        const {movies} = this.props;
        return (
            <div>
                Here is similar movies
                <div>{movies && movies.map((movie:similarMovieType) =>(
                   <div key={movie.id}>{movie.title}</div>
                ))}</div>
            </div>
        )
    }
}


export default SimilarMovies