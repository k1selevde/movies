import * as React from 'react'
import {withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux'
import {collectionMovie} from "../../types/types";
import HorizontalMovieCard from '../../components/MovieCard/HorizontalMovieCard'


interface ISpecialPageProps {
    title: string
    movies: collectionMovie[],
    getCollection: (page: number) => Promise<void>
}

type State = {
    page: number
}

class SpecialPage extends React.Component<ISpecialPageProps,State> {
   readonly state: State = {
        page: 1,
    };
   async uploadHandler() {
        console.log('CLICK!11!', this.props)
        //await this.setState({page: this.state.page++})
        this.props.getCollection(this.state.page)
    }

    componentDidMount(): void {
        const {movies} = this.props;
        console.log('CDM, collections: ',movies )
    }

    componentWillUnmount(): void {

    }

    render() {
        const {movies=[],title} = this.props

        return (
            <>
                <h4>{title}</h4>
                <div className="container">
                    <div className="row">
                        {movies.map((movie: collectionMovie) => (
                        <div className="col-4">
                            <HorizontalMovieCard movie={movie}/>
                        </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={this.uploadHandler}
                    style={{marginTop: '15px', marginBottom: '20px'}}
                >
                    Показать больше
                </button>
            </>
        )
    }
}


export default SpecialPage;