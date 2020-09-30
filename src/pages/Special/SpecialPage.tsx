import * as React from 'react'
import {withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux'
import {collectionMovie} from "../../types/types";
import HorizontalMovieCard from '../../components/MovieCard/HorizontalMovieCard'


interface ISpecialPageProps {
    title: string
    movies: collectionMovie[],
    getCollection: (page: string) => Promise<void>
}

type State = {
    page: number
}

const SpecialPage : React.FC<ISpecialPageProps> = ({movies,title,getCollection}) =>  {

   const [page,setPage] = React.useState(1)

   const uploadHandler = () =>  {
        setPage((page:number) => page+1)
        getCollection(String(page))
    }

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
                onClick={uploadHandler}
                style={{marginTop: '15px', marginBottom: '20px'}}
            >
                Показать больше
            </button>
        </>
    )

}


export default SpecialPage;