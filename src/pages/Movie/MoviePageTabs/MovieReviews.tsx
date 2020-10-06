import * as React from 'react'
import {movieReviewType} from "../../../types/types";

interface IMovieReviews {
    id: string
    reviews: any
    getReviews: () => Promise<void>
}

const MovieReviews: React.FC<IMovieReviews> = ({id,reviews,getReviews}) => {

    React.useEffect(() => {
        getReviews()
    }, [id])

/*    componentDidMount(): void {
        this.props.getReviews()
    }*/

    return (
        <>
            <div>
                {reviews && reviews.map((review: movieReviewType) => (
                    <div key={review.id}>{review.author} : {review.content}</div>
                ))}
            </div>
        </>
    )
}

export default MovieReviews;