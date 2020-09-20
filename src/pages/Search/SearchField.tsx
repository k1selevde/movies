import * as React from 'react'

type SearchFieldProps = {
    search: string,
    updateSearch: (search: string) => {}
}

const SearchField  = ({search,updateSearch}: SearchFieldProps) => {

    const changeSearchHandler = (e: any) => {
        let value = e.target.value
        updateSearch(value)
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <input
                    className="searchField__input"
                    value={search}
                    type="text"
                    onChange={changeSearchHandler}
                    placeholder={"Найти фильмы, сериалы, актеров"}
                />
            </div>
            <h1>{search}</h1>
        </>

    );
}

export default SearchField;