import * as React from 'react'
import {useHistory} from "react-router-dom";

type SearchFieldProps = {
    search: string,
    updateSearch: (search: string) => {}
}

const SearchField  = ({search,updateSearch}: SearchFieldProps) => {
    const history = useHistory()
    const sVal = React.useRef(null)

    const changeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        updateSearch(value)
    }
    const toggleShowSearchField = (e: any ) => {

    }
    const submitForm = (e: any) => {
        e.preventDefault()
        history.push(`/search/${sVal.current.value}`)
    }
    return (
        <>
            <div className="d-flex">
                <form
                    className="searchField__form"
                    onSubmit={submitForm}
                >
                    <input
                        ref={sVal}
                        className="searchField__input"
                        value={search}
                        type="text"
                        onChange={changeSearchHandler}
                        placeholder={"Найти фильмы, сериалы, актеров и тд!"}
                        autoFocus
                    />
{/*                    <div
                        // className="search__icon"
                    >
                        CLICK
                    </div>*/}
                </form>
            </div>
        </>

    );
}

export default SearchField;