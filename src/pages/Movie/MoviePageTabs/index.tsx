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
import {getMovieCredits, getMovieReviews, getMovieVideos} from "../../../redux/actions/movieActions";
import MovieVideos from "./MovieVideos";

type tabType = {
    link: string,
    path: string
}

interface IMoviePageTabsProps {
    id: string
    currentMovie: CurrentMovieType
    getMovieReviews: (id: string, page: string) => Promise<void>
    getMovieCredits: (id: string) => Promise<void>
    getMovieVideos: (id: string) => Promise<void>
}

const MoviePageTabs: React.FC<IMoviePageTabsProps & RouteComponentProps>  = ({
                                                                                 getMovieVideos,
                                                                                 getMovieCredits,
                                                                                 getMovieReviews,
                                                                                 id,
                                                                                 currentMovie: {videos,details,credits,reviews}
                                                                            }) => {

    return (
        <section>
            <NavTabs id={id}/>
            <div className="movieTabs__container" >
                <Switch>
                    <Route path="/movie/:id/reviews" render={() =>
                    {
                        return <MovieReviews
                                    id={id}
                                    reviews={reviews}
                                    getReviews={getMovieReviews.bind(null,id,"1")}
                        />
                    }} />
                    <Route path="/movie/:id/videos" render={() =>
                    {
                        return <MovieVideos id={id}
                                            //@ts-ignore
                                            videos={videos}
                                            getVideos={getMovieVideos.bind(null,id)}
                        />
                    }} />

                    <Route path="/movie/:id/credits" render={() => {
                       return  <MovieCredits
                                    id={id}
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


export default connect(null,{getMovieReviews, getMovieCredits, getMovieVideos})(withRouter(MoviePageTabs));