import * as React from 'react'
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux'
import {getMovieCredits, getMovieDetails, getMovieKeywords, getMovieReviews,getSimilarMovies} from "../../redux/actions/movieActions";
import {movieDetailsType} from "../../types/types";
import MovieKeywords from "./MovieKeywords";
import SimilarMovies from "./SimilarMovies";
import {CurrentMovieType} from '../../redux/reducers/MovieReducer'
import MovieReviews from "./MovieReviews";
import MovieCredits from "./MovieCredits";


interface MoviePageProps {
    id: string;
    getMovieDetails: (id: string) => Promise<void>,
    getMovieKeywords: (id: string) => Promise<void>,
    getMovieReviews: (id: string,page: string) => Promise<void>,
    getMovieCredits: (id: string) => Promise<void>,
    getSimilarMovies: (id: string,page: string) => Promise<void>,
    currentMovie: CurrentMovieType
}

interface MoviePageState {}

class MoviePage extends React.Component<MoviePageProps,MoviePageState> {

    componentDidMount(): void {
        const {id} = this.props
        this.props.getMovieDetails(String(id))
    }

    render() {
        const {currentMovie: {details,keywords,similarMovies,credits,reviews},
            id,getMovieKeywords,getSimilarMovies,getMovieReviews,getMovieCredits} = this.props;
        return (
            <>
                <div>
                    Movie PAGE!11, {id}
                </div>
                <div>
                    <h4>keywords</h4>
                    <MovieKeywords
                        //@ts-ignore
                        keywords={keywords}
                        getKeywords={getMovieKeywords.bind(null,id)}
                    />
                </div>
                <div>
                    <h4>Similar movies:</h4>
                    <SimilarMovies
                        //@ts-ignore
                        movies={similarMovies}
                        getMovies={getSimilarMovies.bind(null,id,'1')}
                    />
                </div>
                <div>
                    <h4>Reviews</h4>
                    <MovieReviews
                        reviews={reviews}
                        getReviews={getMovieReviews.bind(null,id,"1")}
                    />
                </div>
                <div>
                    <h4>Credits</h4>
                    <MovieCredits
                        credits={credits}
                        getCredits={getMovieCredits.bind(null,id)}
                    />
                </div>
            </>
        )
    }
}
const mapStateToProps = (state: AppStateType)=> ({
    currentMovie: state.movie.currentMovie,
})


export default connect(mapStateToProps,
    {
        getMovieDetails,
        getMovieKeywords,
        getMovieReviews,
        getMovieCredits,
        getSimilarMovies
    })(MoviePage)