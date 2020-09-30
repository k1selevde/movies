import * as React from 'react'
import {withRouter} from "react-router";
import {NavLink} from "react-router-dom";
import NavTabs from './NavTabs'
import {Switch,Route} from 'react-router-dom'
import MovieCredits from "./MovieCredits";
import MovieReviews from "./MovieReviews";
import MovieDetails from "./MovieDetails";
import {AppStateType} from "../../../redux/reducers";
import {currentFiltersType, CurrentMovieType} from "../../../redux/reducers/MovieReducer";
import {connect} from 'react-redux'
import {getMovieCredits, getMovieDetails, getMovieReviews} from "../../../redux/actions/movieActions";

type tabType = {
    link: string,
    path: string
}

interface IMoviePageTabsProps {
    id: string
    history: any
    match: any
    location: any
    currentMovie: CurrentMovieType
}

const MoviePageTabs: React.FC<IMoviePageTabsProps>  = ({id,match,currentMovie: {details,credits,reviews}}) => {

    return (
        <section>
            <NavTabs />
            <div>
                <Switch>
                    <Route path="/movie/:id/reviews" render={() =>
                    {
                        return <MovieReviews reviews={reviews}
                                             getReviews={getMovieReviews.bind(null,id,"1")}/>
                    }} />
                    <Route path="/movie/:id/credits" render={() => {
                       return  <MovieCredits
                            credits={credits}
                            getCredits={getMovieCredits.bind(null,id)}
                            />
                    }} />
                    <Route path="/movie/:id" exact component={() => <MovieDetails details={details} />} />
                </Switch>
            </div>
        </section>
    )
}


export default connect(null,{getMovieDetails,getMovieReviews, getMovieCredits,})(withRouter(MoviePageTabs));