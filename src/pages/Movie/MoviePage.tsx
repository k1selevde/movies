import * as React from 'react'
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux'
import {getMovieCredits, getMovieDetails, getMovieKeywords, getMovieReviews,getSimilarMovies,clearCurrentMovie} from "../../redux/actions/movieActions";
import {MovieDetailsType} from "../../types/types";
import MovieKeywords from "./MovieKeywords";
import SimilarMovies from "./SimilarMovies";
import {CurrentMovieType} from '../../redux/reducers/MovieReducer'
import MovieReviews from "./MoviePageTabs/MovieReviews";
import MovieCredits from "./MoviePageTabs/MovieCredits";
import MoviePageTabs from "./MoviePageTabs";


interface IMoviePageProps {
    id: string;
    getMovieDetails: (id: string) => Promise<void>
    getMovieKeywords: (id: string) => Promise<void>
    getMovieReviews: (id: string,page: string) => Promise<void>
    getMovieCredits: (id: string) => Promise<void>
    getSimilarMovies: (id: string,page: string) => Promise<void>
    clearCurrentMovie: () => {}
    currentMovie: CurrentMovieType
}

interface MoviePageState {}

const MoviePage: React.FC<IMoviePageProps> = ({
                                                  currentMovie,
                                                  id,
                                                  getMovieKeywords,
                                                  getSimilarMovies,
                                                  getMovieDetails,
                                                  clearCurrentMovie
}) => {

    React.useEffect(() => {
        return () => {
            clearCurrentMovie()
        }
    }, [])

    React.useEffect(() => {
        getMovieDetails(String(id))
    }, [id])


    return (
        <>
            {
                currentMovie && currentMovie.details &&
                <div
                        style={{
                            background: `url(https://image.tmdb.org/t/p/w500/${currentMovie.details.backdrop_path}) no-repeat`,
                            width: '100%',
                            height: '300px'
                        }}
                        className="moviePage__header"
                    >
                    {currentMovie.details.title}  , {id} , {currentMovie.details.backdrop_path}
                </div>
            }
            
            <div>
                <h4>Keywords</h4>
                <MovieKeywords
                    id={id}
                    //@ts-ignore
                    keywords={currentMovie.keywords}
                    getKeywords={getMovieKeywords.bind(null,id)}
                />
            </div>

            <div>
                <MoviePageTabs
                    id={id}
                    currentMovie={currentMovie}
                />
            </div>

            <div>
                <h4>Similar movies:</h4>
                <SimilarMovies
                    id={id}
                    //@ts-ignore
                    movies={currentMovie.similarMovies}
                    getMovies={getSimilarMovies.bind(null,id,'1')}
                />
            </div>
        </>
    )
}


const mapStateToProps = (state: AppStateType)=> ({
    currentMovie: state.movie.currentMovie,
})


export default connect(mapStateToProps,
    {
        clearCurrentMovie,
        getMovieKeywords,
        getMovieDetails,
        getSimilarMovies
    })(MoviePage)