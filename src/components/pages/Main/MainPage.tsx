import * as React from 'react'
import SpecialCollection from '../../SpecialCollection/SpecialCollection'
import Posters from "../../common/Posters";
import {AppStateType} from "../../../redux/reducers";
import {connect} from 'react-redux';
import {getCollection} from '../../../redux/actions/movieActions';
import {collectionMovie} from "../../../types/types";
import {specialCollectionType} from "../../../redux/reducers/MovieReducer";
import {Link} from 'react-router-dom';

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
        let {popular=[],collections = [],curCollection=[],getCollection, special_collections = {}} = this.props;
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
                    {Object.keys(special_collections).map((key)=>(
                        <div key={key}>
                            <h4>{key}</h4>

                            <SpecialCollection
                                getCollection={getCollection}
                                category={key}
                            >
                                {special_collections[key] ? special_collections[key].map((i: collectionMovie)=> (<p>{i.title}</p>)) : []}
                            </SpecialCollection>
                            <span>text вверху</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state : AppStateType) => ({
    collections: state.movie.collections,
    curCollection: state.movie.curCollection,
    special_collections: state.movie.special_collections,
    popular: state.movie.special_collections.popular
})


export default connect(mapStateToProps,{getCollection})(MainPage)