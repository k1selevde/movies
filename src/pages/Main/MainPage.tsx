  import * as React from 'react'
import SpecialCollection from '../../components/SpecialCollection/SpecialCollection'
import Posters from "../../components/common/Posters";
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux';
import {getCollection} from '../../redux/actions/movieActions';
import {collectionMovie} from "../../types/types";
import {specialCollectionType} from "../../redux/reducers/MovieReducer";
import {Link, NavLink} from 'react-router-dom';
import Progress from '../../components/common/Progress'
import RSlider from "../../components/common/RSlider";

function isEmpty(obj: object,key: string) : Boolean {
    //@ts-ignore
    return Boolean(obj[key]);
}

interface MainPageProps {
    collections: Array<string[]>,
    getCollection: (category: string) => Promise<void>,
    // special_collections: specialCollectionType,
    special_collections: specialCollectionType,
    // special_collections: object,
    curCollection: collectionMovie[],
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
{/*                <Progress />*/}
                <div>

                    {Object.keys(special_collections).map((key:string, i: number)=>(
                       <div key={key}>
                            <NavLink
                                className="specialCol__link"
                                to={`/special/${key}`}
                            >
                                {collections[i][1]}
                            </NavLink>

                            <SpecialCollection
                                getCollection={getCollection}
                                category={key}
                                //@ts-ignore
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