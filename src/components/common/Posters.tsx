import * as React from 'react'
import {AppStateType} from "../../redux/reducers";
import {connect} from "react-redux";
import {getPosters} from "../../redux/actions/movieActions";
import UniversalSlider from "./UniversalSlider";

interface IPostersProps {
    posters: null | []
    getPosters: () => Promise<void>
}

const Posters: React.FC<IPostersProps> = ({posters, getPosters}) => {
    React.useEffect(() => {
        getPosters()
    }, [])

    return (
        <>
            <h4
                className="posters__title"
            >
                Сейчас в кино</h4>
            <div className="posters__wrap">
                {posters && <UniversalSlider moviesArr={posters} />}
            </div>
        </>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    posters: state.movie.posters
})


export default connect(mapStateToProps, {getPosters})(Posters)