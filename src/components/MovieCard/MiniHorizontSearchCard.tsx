import * as React from 'react'
import {collectionMovie} from "../../types/types";
import {Link} from 'react-router-dom'
//@ts-ignore
import defaultCard from '../../assets/img/defaultMovieCard.jpg'



interface IMovieCardProps {
    movie: any
}

const MiniHorizontalMovieCard: React.FC<IMovieCardProps> = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div style={{color: 'blue', overflow: 'hidden'}} className="miniMovieCard__wrap">
                <div>
                    <div className='movieCard__img-div'></div>
                    <img
                        src={Boolean(movie.backdrop_path) ?  `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultCard}
                        alt={movie.title}
                        className="miniMovieCard__img"
                    />
                </div>
                <h4 className="miniMovieCard__title">{movie.title}</h4>
            </div>
        </Link>
    );
}

export default MiniHorizontalMovieCard;