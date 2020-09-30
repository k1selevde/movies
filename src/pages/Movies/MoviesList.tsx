import * as React from 'react'
import HorizontalMovieCard from "../../components/MovieCard/HorizontalMovieCard";
import {ComponentClass} from "react";
import {WithLoading} from "../../components/HOC/WithLoading";
import {collectionMovie} from "../../types/types";
/*import WithLoading from "../../HOC/WithLoading";*/

type Movie = {
    title?: string,
    id?: string,
}

interface MoviesListProps  {
    movies: collectionMovie[]
}


class MoviesList extends React.Component<MoviesListProps> {

    render() {
        const {movies} = this.props;

        return (
            <div>
                <div className="moviesList__wrap">
                    {movies.map(movie => (
                        <div className="col-6">
                             <HorizontalMovieCard movie={movie}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MoviesList;
