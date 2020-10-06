import * as React from 'react'
import GenresContainer from "./Genres/GenresContainer";
import Sorting from './Sorting/Sorting'
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux'
import {OptionType} from "../../types/types";
import Genres, {Genre} from "./Genres/Genres";
import {clearGenres, getGenres, updateGenres} from "../../redux/actions/movieActions";



interface IFilterProps {
    genres: Array<Genre>
    setCurrentSortOption: (option: string) => {}
    options: OptionType[]
    updateGenres: (name: string) => {}
    getGenres: () => Promise<void>
    clearGenres: () => {}
}


class Filters extends React.Component<IFilterProps> {
   componentDidMount(): void {
       // fetching here
   }

    sortingChange() {

    }

    render() {
        const {options,genres,updateGenres,getGenres,clearGenres} = this.props;
        return (
            <div
                className="filters__container"
            >
                <h4
                    className="filters_title"
                >
                    Фильтры
                </h4>

                <Sorting
                    setCurrentSortOption={this.props.setCurrentSortOption}
                    options={options}
                />
                <Genres
                    genres={genres}
                    updateGenres={updateGenres}
                    getGenres={getGenres}
                    clear={clearGenres}
                />
                <button
                    onClick={() => { clearGenres()}}
                    className="reset-btn"
                >
                    СБРОСИТЬ
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    genres: state.movie.genres,
    options: state.movie.filters.sorting.options
})

export default connect(mapStateToProps,{updateGenres,getGenres,clearGenres})(Filters);