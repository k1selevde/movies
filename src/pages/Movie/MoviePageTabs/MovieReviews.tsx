import * as React from 'react'
import {movieReviewType} from "../../../types/types";

interface IMovieReviews {
    reviews: any,
    getReviews: () => Promise<void>
}

class MovieReviews extends React.Component<IMovieReviews> {
    componentDidMount(): void {
        alert('reviews')
        this.props.getReviews()
    }

    render() {
        const {reviews=[]} = this.props;
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
}
export default MovieReviews;