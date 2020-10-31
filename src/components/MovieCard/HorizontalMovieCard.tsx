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

    let currentTitle = (movie.title.length > 23) ? movie.title.slice(0,20) + '...' : movie.title
    let backColor = (movie.vote_average >= 7 ? "#21D07A" : "#D0D331")
    return (
        <Link style={{textDecoration: 'none'}} to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movieCard__wrap">

                <h4 className="movieCard__title">{currentTitle}</h4>
                <div className="movieCard__img--wrap">
                    <div
                        className="movieCard__vote"
                        style={{background: backColor}}
                    >
                        {movie.vote_average}
                    </div>
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