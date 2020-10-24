import * as React from 'react'
import {Link} from 'react-router-dom'
import {collectionMovie} from "../../types/types";
//@ts-ignore
import defaultCard from "../../assets/img/defaultMovieCard.jpg";

interface IPosterMovieCardProps {
    movie: collectionMovie
}

const PosterMovieCard: React.FC<IPosterMovieCardProps> = ({movie}) => {
    return (
        <Link to={`movie/${movie.id}`}>
            <div>
                <img
                    src={Boolean(movie.backdrop_path) ?  `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultCard}
                    alt={movie.title}
                    className="movieCard__img"
                />
            </div>
            <div>{movie.title}</div>
        </Link>
    )
}

export default PosterMovieCard

