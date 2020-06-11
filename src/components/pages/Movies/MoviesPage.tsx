import * as React from 'react'
import MoviesList from "./MoviesList";
import Filters from "../../Filters/Filters";

class MoviesPage extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <Filters/>
                    </div>
                    <div className="col-9">
                        <MoviesList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesPage