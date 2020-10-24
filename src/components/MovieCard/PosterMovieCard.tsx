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
        <Link
            className="posterMovieCard__wrap"
              to={`movie/${movie.id}`}
        >
            <div>
                <img
                    src={Boolean(movie.backdrop_path) ?  `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultCard}
                    alt={movie.title}
                    className="posterMovieCard__img"
                />
            </div>
            <h4
                className="posterMovieCard__title"
            >{movie.title}</h4>
        </Link>
    )
}

export default PosterMovieCard

