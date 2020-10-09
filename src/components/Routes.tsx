import {Route, Switch} from "react-router";
import MainPage from "../pages/Main/MainPage";
import MoviesPage from "../pages/Movies/MoviesPage";
import PeoplePage from "../pages/Person/PersonPage";
import SearchPage from "../pages/Search/QuerySearch/QuerySearchPage";
import SpecialPage from "../pages/Special/SpecialPage";
import MoviePage from "../pages/Movie/MoviePage";
import NotFound from "./common/NotFound";
import * as React from "react";
import {AppStateType} from "../redux/reducers";
import {connect} from 'react-redux'
import {getCollection} from "../redux/actions/movieActions";
import EmptySearchPage from "../pages/Search/EmptySearch/EmptySearchPage";
import {clearSpecialCollection, getSpecialCollection} from '../redux/actions/specialActions'
import {collectionMovie} from "../types/types";


function getTitleForSpecialPage(arr: any[][], query: string) {
    let resArr = arr.filter((val) => val[0] == query)
    return resArr.length !== 0 ? resArr[0][1] : ''
}

type RoutesPropsType = {
    movies: collectionMovie[]
    collections: any[][],
    getSpecialCollection: (category: string, page: string) => Promise<void>,
    clearSpecialCollection: (value: string) => {}
}

const Routes  = ({movies,collections,getSpecialCollection, clearSpecialCollection} : RoutesPropsType) => {
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
                <Route exact path="/search"  component={EmptySearchPage} />


                <Route path="/movie/:id" render={({match}) =>
                {
                    let {id} = match.params
                    //let id = React.useMemo(() => match.params.id, [match.params])
                    //@ts-ignore
                    return <MoviePage id={id}/>
                }}
                />
                <Route path="/special/:value" render={({match}) =>
                {
                    let {value} = match.params
                    let title = getTitleForSpecialPage(collections,value)

                    if (!!title) return <SpecialPage getCollection={getSpecialCollection.bind(null,value)} title={title} movies={movies} clear={clearSpecialCollection.bind(null,value)}/>
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
    movies: state.special.currentCollection
})

export default connect(mapStateToProps,{getSpecialCollection,clearSpecialCollection})(Routes);