import * as React from 'react'
import {findOftenPeople} from "../../../redux/actions/searchActions";
import HorizontalMovieCard from "../../../components/MovieCard/HorizontalMovieCard";
import MoviesList from "../../Movies/MoviesList";
import ShowMoreBtn from "../../../components/common/UI/ShowMoreBtn";

interface IOftenFindMoviesProps {
    oftenMovies: null | any
    findOftenMovies: () => Promise<void>
    updateOftenMovies: (page: string) => Promise<void>
    clear: () => {}
}

const OftenFindMovies: React.FC<IOftenFindMoviesProps> = ({clear, oftenMovies, findOftenMovies, updateOftenMovies}) => {

    const [page, setPage] = React.useState(2)

    React.useEffect(() => {
        findOftenMovies()
        return () => {
            clear()
        }
    }, [])


    const showMoreHandler = async () => {
        updateOftenMovies(String(page))
        await setPage(page + 1)
    }

    return (
        <>
            {oftenMovies && oftenMovies.results &&
                <>
                    <div>
                        <div className="container">
                            <MoviesList movies={oftenMovies.results}/>
                        </div>
                    </div>
                    {!Boolean(oftenMovies.total_pages + 1 <= page) && <ShowMoreBtn handler={showMoreHandler} />}
                </>
            }
        </>
    )
}

export default OftenFindMovies