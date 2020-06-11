import * as React from 'react'
import MovieCard from "../../MovieCard/MovieCard";
import {ComponentClass} from "react";
import {WithLoading} from "../../HOC/WithLoading";
/*import WithLoading from "../../HOC/WithLoading";*/

type Movie = {
    title?: string,
    id?: string,
}

interface ListProps  {
    movies: Array<Movie>
}

type DefaultProps = Readonly<typeof  defaultProps>

const defaultProps  = {
    movies: [
        {id: 't5', title: 'Del Boske style'},
        {id: 't5', title: 'Delly askin'},
        {id: '6ytra', title: 'kvadrat dvora'},
        {id: '6ytra', title: 'kvadrat dvora'},
        {id: '6ytra', title: 'kvadrat eerer'},
    ]
}


class MoviesList extends React.Component<ListProps & DefaultProps> {
    static defaultProps = defaultProps;

    render() {
        const {movies} = this.props;

        return (
            <div>
                <div className="moviesList__wrap">
                    {movies.map(movie => (
                        <div className="col-6" key={movie.id}>
                             <MovieCard movie={movie}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

/*
export default WithLoading(MoviesList)*/

export default MoviesList;
