import * as React from 'react'
import GenresContainer from "./Genres/GenresContainer";
import Sorting from './Sorting/Sorting'
import {AppStateType} from "../../redux/reducers";
import {connect} from 'react-redux'
import {OptionType} from "../../types/types";



interface IFilterProps {
    // filters?: Array<FilterType>
    options: OptionType[]
}


class Filters extends React.Component<IFilterProps> {
   componentDidMount(): void {
       // fetching here
   }

    sortingChange() {

    }

    render() {
        const {options} = this.props;
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
                    options={options}
                />
                <GenresContainer />
                <button className="reset-btn">СБРОСИТЬ</button>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    options: state.movie.filters.sorting.options
})
export default connect(mapStateToProps)(Filters);