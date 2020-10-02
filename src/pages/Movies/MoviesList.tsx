import * as React from 'react'
import HorizontalMovieCard from "../../components/MovieCard/HorizontalMovieCard";
import {ComponentClass} from "react";
import {WithLoading} from "../../components/HOC/WithLoading";
import {collectionMovie} from "../../types/types";
/*import WithLoading from "../../HOC/WithLoading";*/

/*
type Movie = {
    title?: string,
    id?: string,
}
*/

interface IMoviesListProps  {
    movies: collectionMovie[]
}


const MoviesList : React.FC<IMoviesListProps> = ({movies}) => {

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

export default MoviesList;
