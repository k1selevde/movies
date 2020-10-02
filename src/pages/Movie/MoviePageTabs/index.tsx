import * as React from 'react'
import {withRouter} from "react-router";
import {NavLink} from "react-router-dom";
import NavTabs from './NavTabs'
import {Switch,Route, RouteComponentProps} from 'react-router-dom'
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
    currentMovie: CurrentMovieType
    getMovieReviews: (id: string, page: string) => Promise<void>
    getMovieCredits: (id: string) => Promise<void>
}

const MoviePageTabs: React.FC<IMoviePageTabsProps & RouteComponentProps>  = ({
                                                                                 getMovieCredits,
                                                                                 getMovieReviews,
                                                                                 id,
                                                                                 currentMovie: {details,credits,reviews}
                                                                            }) => {

    return (
        <section>
            <NavTabs />
            <div>
                <Switch>
                    <Route path="/movie/:id/reviews" render={() =>
                    {
                        return <MovieReviews
                                    reviews={reviews}
                                    getReviews={getMovieReviews.bind(null,id,"1")}/>
                    }} />
                    <Route path="/movie/:id/credits" render={() => {
                       return  <MovieCredits
                                    getCredits={getMovieCredits.bind(null,id)}
                                    {...{/*@ts-ignore*/}}
                                    credits={credits}
                       />
                    }} />
                    <Route path="/movie/:id" exact component={() => <MovieDetails details={details} />} />
                </Switch>
            </div>
        </section>
    )
}


export default connect(null,{getMovieReviews, getMovieCredits})(withRouter(MoviePageTabs));