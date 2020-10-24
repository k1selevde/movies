import * as React from 'react'
import {api_url} from "../../constants/default";
import {collectionMovie} from "../../types/types";
import {Link} from 'react-router-dom'
//@ts-ignore
import defaultCard from '../../assets/img/defaultMovieCard.jpg'
interface IMovieCardProps {
    movie: collectionMovie
}

const HorizontalMovieCard: React.FC<IMovieCardProps> = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movieCard__wrap">
                <h4 className="movieCard__title">{movie.title}</h4>
                <div>
                    <img
                        src={Boolean(movie.backdrop_path) ?  `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultCard}
                        alt={movie.title}
                        className="movieCard__img"
                    />
                </div>
            </div>
        </Link>
    );
}

export default HorizontalMovieCard;