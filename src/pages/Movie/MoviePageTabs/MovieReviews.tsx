import * as React from 'react'
import {movieReviewType} from "../../../types/types";

//@ts-ignore
import noImagePeople from "../../../assets/img/noImagePeople.png"



interface IMovieReviews {
    id: string
    reviews: any
    getReviews: () => Promise<void>
}

const MovieReviews: React.FC<IMovieReviews> = ({id,reviews,getReviews}) => {

    React.useEffect(() => {
        console.log('find reviews')
        getReviews()
    }, [id])

/*    componentDidMount(): void {
        this.props.getReviews()
    }*/
    return (
        <>
            <div>
                {reviews && reviews.map((review: movieReviewType) => (
                    <div className="movieReview__wrap" key={review.id}>
                        <div className="movieReview__author">
                            <img
                                className="movieReview__author--img"
                                src={noImagePeople}
                                alt="photo"
                            />
                            <h4 className="movieReview__author--name">{review.author}</h4>

                        </div>
                        <div className="movieReview__content">
                            {review.content.length > 2200 ? review.content.slice(0,2197) + '...' : review.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieReviews;