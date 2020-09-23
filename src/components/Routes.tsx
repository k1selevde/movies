import {Route, Switch} from "react-router";
import MainPage from "../pages/Main/MainPage";
import MoviesPage from "../pages/Movies/MoviesPage";
import PeoplePage from "../pages/People/PeoplePage";
import SearchPage from "../pages/Search/Search";
import SpecialPage from "../pages/Special/SpecialPage";
import MoviePage from "../pages/Movie/MoviePage";
import NotFound from "./common/NotFound";
import * as React from "react";
import {AppStateType} from "../redux/reducers";
import {connect} from 'react-redux'
import {getCollection} from "../redux/actions/movieActions";


function getTitleForSpecialPage(arr: any[][], query: string) {
    let resArr = arr.filter((val) => val[0] == query)
    return resArr.length !== 0 ? resArr[0][1] : ''
}

type RoutesPropsType = {
    collections: any[][],
    special_collections: any,
    getCollection: (category: string, page: number) => Promise<void>
}

const Routes  = ({collections,special_collections,getCollection} : RoutesPropsType) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/movies" component={MoviesPage}/>
                <Route path="/people/:id" component={PeoplePage} />
                <Route path="/search/:value" render={({match}) =>
                {
                    let {value} = match.params;
                    return <SearchPage value={value} />
                }}
                />

                <Route path="/movie/:id" render={({match}) =>
                {
                    let {id} = match.params
                    return <MoviePage id={id}/>
                }}
                />
                <Route path="/special/:value" render={({match}) =>
                {
                    let {value} = match.params
                    let title = getTitleForSpecialPage(collections,value)

                    if (!!title) return <SpecialPage getCollection={getCollection.bind(null,value)} title={title} movies={special_collections[value]}/>
                    return <NotFound />
                }}
                />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    collections: state.movie.collections,
    special_collections: state.movie.special_collections,
})

export default connect(mapStateToProps,{getCollection})(Routes);