import * as React from 'react'
import {api_url} from "../../constants/default";
import {collectionMovie} from "../../types/types";

interface MovieCardProps {
    movie: collectionMovie
}


const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    return (
        <div style={{color: 'blue'}} className="movieCard__wrap">
            flow:{movie}
            <div>
                <img src={`${api_url}/${movie.backdrop_path}`} alt=""/>
            </div>
        </div>
    );
}

export default MovieCard;