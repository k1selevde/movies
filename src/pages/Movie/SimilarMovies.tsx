import * as React from 'react'
import {similarMoviesResultsType, similarMovieType} from "../../types/types";
import Slider from '../../components/common/Slider'


interface ISimilarMoviesProps {
    movies: similarMovieType[],
    getMovies: ()=> Promise<void>
}

class SimilarMovies extends React.PureComponent<ISimilarMoviesProps> {
    componentDidMount(): void {
        this.props.getMovies()
    }

    render() {
        const {movies} = this.props;
        return (
            <div>
                {movies && <Slider moviesArr={movies}/>}
            </div>
        )
    }
}


export default SimilarMovies