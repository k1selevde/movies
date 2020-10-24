import * as React from 'react'
import {connect} from 'react-redux'
import OftenFindMovies from "./OftenFindMovies";
import OftenFindPeople from "./OftenFindPeople";
import {AppStateType} from "../../../redux/reducers";
import {
    findOftenMovies,
    findOftenPeople,
    updateOftenMovies,
    updateOftenPeople,
    clearOftenSearchPeople,
    clearOftenSearchMovies
} from "../../../redux/actions/searchActions";



interface IEmptySearchPageProps {
    oftenPeople: null | any
    oftenMovies: null | any
    findOftenPeople: (page: string) => Promise<void>
    updateOftenPeople: (page: string) => Promise<void>
    findOftenMovies: (page: string) => Promise<void>
    updateOftenMovies: (page: string) => Promise<void>
    clearOftenSearchMovies: () => {}
    clearOftenSearchPeople: () => {}
}


const EmptySearchPage: React.FC<IEmptySearchPageProps> = ({clearOftenSearchMovies,clearOftenSearchPeople,oftenMovies,findOftenMovies,updateOftenMovies,oftenPeople,findOftenPeople,updateOftenPeople}) => {
    return (
        <div>
            <h4>Часто ищут</h4>
            <OftenFindMovies
                oftenMovies={oftenMovies}
                updateOftenMovies={updateOftenMovies}
                findOftenMovies={findOftenMovies.bind(null,'1')}
                clear={clearOftenSearchMovies}
            />
            <h4>Актеры и режиссеры</h4>
           <OftenFindPeople
                oftenPeople={oftenPeople}
                findOftenPeople={findOftenPeople.bind(null,'1')}
                updateOftenPeople={updateOftenPeople}
                clear={clearOftenSearchPeople}
            />
        </div>
    )
}


const mapStateToProps = (state: AppStateType) => ({
    oftenPeople: state.search.results.oftenPeople,
    oftenMovies: state.search.results.oftenMovies
})

export default connect(mapStateToProps, {
    findOftenPeople,
    updateOftenPeople,
    findOftenMovies,
    updateOftenMovies,
    clearOftenSearchMovies,
    clearOftenSearchPeople
})(EmptySearchPage);