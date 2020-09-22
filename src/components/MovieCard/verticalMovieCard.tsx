import * as React from 'react'
import {Link} from 'react-router-dom'
import {collectionMovie} from "../../types/types";

type VerticalMovieCardProps = {
    movie: collectionMovie
}

const verticalMovieCard: React.FC<VerticalMovieCardProps> = ({movie}) => {
    return (
        <Link to={`movie/${movie.id}`}>
            <div>{movie.title}</div>
        </Link>
    )
}

export default verticalMovieCard