import * as React from 'react'
import {findOftenPeople} from "../../../redux/actions/searchActions";
import HorizontalMovieCard from "../../../components/MovieCard/HorizontalMovieCard";

interface IOftenFindMoviesProps {
    oftenMovies: null | any
    findOftenMovies: () => Promise<void>
    updateOftenMovies: (page: string) => Promise<void>
}

 const OftenFindMovies : React.FC<IOftenFindMoviesProps>  = ({oftenMovies, findOftenMovies, updateOftenMovies}) => {

    const [page,setPage] = React.useState(2)

     React.useEffect(() => {
         findOftenMovies()
     }, [])



    const showMoreHandler = async () => {
        updateOftenMovies(String(page))
        await setPage(page+1)
    }

    return (
        <>
            <h4>Часто ищут</h4>
            <div>
                <div className="container">
                    <div className="row">
                            {oftenMovies && oftenMovies.results && oftenMovies.results[0] && oftenMovies.results.map((movie: any) => (
                                <div
                                    key={movie.id}
                                    className="col-3"
                                >
                                    <HorizontalMovieCard movie={movie}/>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <button
                onClick={showMoreHandler}
            >
                Показать еще
            </button>
        </>
    )
}

export default OftenFindMovies