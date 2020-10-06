import * as React from 'react'
import Genres from './Genres'
import {connect} from 'react-redux'
import {AppStateType} from "../../../redux/reducers";
import {AnyAction, Dispatch} from "redux";
import {Genre} from "./Genres";
import {updateGenres, UpdateGenresType} from "../../../redux/actions/movieActions";
import {getGenres, GetGenresThunk} from "../../../redux/actions/movieActions";
import {ThunkDispatch} from "redux-thunk";

type GCPropsType = {
    genres: Array<Genre>,
    updateGenres: (data: string) => void,
    getGenres: () => void
}

class GenresContainer extends React.Component<GCPropsType> {
    componentDidMount(): void {
        this.props.getGenres()
    }

    render() {
        const {genres, updateGenres} = this.props;
        console.log(genres);
        return (
            <>
                <div>-</div>
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return ({

    })
}

type actionsType = GetGenresThunk | UpdateGenresType;


/*
const mapDispatchToProps = (dispatch: ThunkDispatch<actionsType>) => {
    return ({
         updateGenres: (data: string) => dispatch(updateGenres(data)),
         getGenres: () => dispatch(getGenres())
    })
}

*/

export default connect(mapStateToProps, )(GenresContainer)