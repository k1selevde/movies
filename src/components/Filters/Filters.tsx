import * as React from 'react'
import GenresContainer from "./Genres/GenresContainer";
import Sorting from './Sorting/Sorting'

type FilterType = {
    name?: string
}

interface Props {
    filters?: Array<FilterType>
}

interface State {
}

class Filters extends React.Component<Props,State> {
    state = {

    }

    render() {
        return (
            <div
                className="filters__container"
            >
                <h4
                    className="filters_title"
                >
                    Фильтры
                </h4>
                <Sorting />
                <GenresContainer />
                <button className="reset-btn">СБРОСИТЬ</button>
            </div>
        )
    }
}

export default Filters;