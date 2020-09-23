import * as React from 'react'
import SpecialCollection from '../../components/SpecialCollection/SpecialCollection'
import Posters from "../../components/common/Posters";
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux';
import {getCollection} from '../../redux/actions/movieActions';
import {collectionMovie} from "../../types/types";
import {specialCollectionType} from "../../redux/reducers/MovieReducer";
import {Link, NavLink} from 'react-router-dom';

interface MainPageProps {
    collections: Array<string[]>,
    getCollection: (category: string) => Promise<void>,
    // special_collections: specialCollectionType,
    special_collections: any,
    // special_collections: object,
    curCollection: collectionMovie[],
    //test
    popular: collectionMovie[]
}

interface MainPageState {

}

class MainPage extends React.Component<MainPageProps,MainPageState> {
    state = {}
    render() {
        let {popular=[],collections = [],getCollection, special_collections = {}} = this.props;
        return (
            <div
                className="main__container"
            >
                <Posters />
                <Link to="/movie/34">MOVIE</Link>
                <div>
                    {/*{collections.map((col) => (
                        <div>
                            <h3>{col[1]}</h3>
                            <SpecialCollection
                                getCollection={getCollection}
                                curCollection={curCollection}
                                category={col[0]}
                                collection={special_collections}
                            />
                        </div>
                    ))}*/}
                    {/*{Object.keys(special_collections).map((key)=>(
                        <div key={key}>
                            <h4>{key}</h4>
                            {@ts-ignore}
                            <span>{special_collections[key]}</span>
                        </div>
                    ))}*/}
                    {Object.keys(special_collections).map((key:string, i: number)=>(
                        <div key={key}>
                            <NavLink to={`/special/${key}`}>
                                {collections[i][1]}

                            </NavLink>

                            <SpecialCollection
                                getCollection={getCollection}
                                category={key}
                                collection={special_collections[key]}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state : AppStateType) => ({
    collections: state.movie.collections,
    special_collections: state.movie.special_collections,
    popular: state.movie.special_collections.popular
})


export default connect(mapStateToProps,{getCollection})(MainPage)