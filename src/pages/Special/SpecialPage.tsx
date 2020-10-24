import * as React from 'react'
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux'
import {collectionMovie} from "../../types/types";
import {withRouter, RouteComponentProps} from 'react-router-dom'
import HorizontalMovieCard from '../../components/MovieCard/HorizontalMovieCard'
import ShowMoreBtn from "../../components/common/UI/ShowMoreBtn";


interface ISpecialPageProps {
    title: string
    movies: collectionMovie[],
    getCollection: (page: string) => Promise<void>
    clear: () => {}
    value: string
}

type State = {
    page: number
}

const SpecialPage : React.FC<ISpecialPageProps> = ({value,clear,movies,title,getCollection}) =>  {

   const [page,setPage] = React.useState(2)


    React.useEffect(() => {
        clear()
    }, [value])

    React.useEffect(() => {
        getCollection('1')
        return () => {
            clear()
        }
    }, [])

   const uploadHandler = async () =>  {
        getCollection(String(page))
       await setPage((page:number) => page+1)
    }

    return (
        <>
            <h4>{title}</h4>
            <div className="container">
                <div className="row">
                    {movies && movies[0] && movies.map((movie: collectionMovie) => (
                    <div className="col-4">
                        <HorizontalMovieCard movie={movie}/>
                    </div>
                    ))}
                </div>
            </div>

            {movies && <ShowMoreBtn handler={uploadHandler} /> }
        </>
    )
}


//export default withRouter(SpecialPage);

export default SpecialPage;