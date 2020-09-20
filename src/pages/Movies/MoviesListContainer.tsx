import * as React from 'react'
import {connect} from 'react-redux'
import MoviesList from './MoviesList'
// import {RootState} from '../../../reducers'


type PropsType = {
}

class MoviesListContainer extends React.Component<PropsType> {
    render() {
        return (
            <div>eAeAeAeAeAeAeAeAe</div>
        )
    }
}

/*
const mapStateToProps = (state: RootState) => ({

})
*/


export default connect()(MoviesListContainer);