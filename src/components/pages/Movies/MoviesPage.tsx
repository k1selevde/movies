import * as React from 'react'
import {AnyAction, Dispatch} from "redux";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {getMovies} from "../../../redux/actions/movieActions";
import {AppStateType} from '../../../redux/reducers';
import Filters from "../../Filters/Filters";
import MoviesList from "./MoviesList";

//@ts-ignore
import Paginator from "../../common/Paginator/Paginator.tsx"

type MoviesPagePropsType = {
    movies: any[];
    getMovies: () => void;
}

class MoviesPage extends React.Component<MoviesPagePropsType> {
    componentDidMount(): void {
        this.props.getMovies()
    }

    render() {
        const {movies} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <Filters/>
                    </div>
                    <div className="col-9">
                        <MoviesList movies={movies}/>
                        <Paginator />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        movies: state.movie.moviesList
    })
}


//@ts-ignore
const mapDispatchToProps = (dispatch: ThunkDispatch<AnyAction>) => {
    return ({
        getMovies: () => dispatch(getMovies())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)