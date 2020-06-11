import * as React from 'react'

interface Props {

}

class Search extends React.Component<Props> {
    state = {
        searchValue: ''
    }

    render() {
        return (
            <form className="search__form">
                <div className="formGroup">
                    <label htmlFor="search"></label>
                    <input type="text" placeholder="Найдите фильм"/>
                </div>
                <button
                    className="search__btn"
                    type="submit"
                >
                    Найти
                </button>
            </form>
        )
    }
}

export default Search;
