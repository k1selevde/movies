import * as React from 'react'
import {api_url} from "../../constants/default";
import {collectionMovie} from "../../types/types";
import {Link} from 'react-router-dom'
interface MovieCardProps {
    movie: collectionMovie
}


const HorizontalMovieCard: React.FC<MovieCardProps> = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div style={{color: 'blue', overflow: 'hidden'}} className="movieCard__wrap">
                <h4 className="movieCard__title">{movie.title}</h4>

                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.title}
                        className="movieCard__img"
                    />
                </div>
            </div>
        </Link>
    );
}

export default HorizontalMovieCard;