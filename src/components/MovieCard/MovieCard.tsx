import * as React from 'react'

interface MovieCardProps {
    movie: {
        title?: string,
        id?: string
    }
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    return (
        <div className="movieCard__wrap">
            {movie.title}
            SOLID BLACK
        </div>
    );
}

export default MovieCard;