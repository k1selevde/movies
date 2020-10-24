import * as React from 'react'
import {withRouter, RouteComponentProps, NavLink} from 'react-router-dom'
import cn from 'classnames'
import MiniHorizontalMovieCard from "../MovieCard/MiniHorizontSearchCard";


type SearchHintPropsType = {
    isOpen: boolean
    toggleSearchField: () => {}
    cachePeople: any[]
    cacheMovies: any[]
}




const SearchHint: React.FC<SearchHintPropsType & RouteComponentProps>  = ({location, cacheMovies, cachePeople,toggleSearchField,isOpen}) => {
// условия появление: если не на searchPage,
// условия закрытия клик по кнопке, ниже хинта, переход на др.страницу

    const locationCondition =  ( (!location.pathname.includes('search')) && (!location.pathname.includes('movie/')) && (!location.pathname.includes('people')) )


    React.useEffect(() => {
        //console.log('pathname: ', location.pathname, 'boolean :',location.pathname.includes('search'))
    })
    let isShow = Boolean(isOpen && locationCondition)
    //React.useMemo(() => {   }, [isOpen])

    const toggleHint = () => {
        toggleSearchField()
    }

    return (
        <>
            {isShow &&
            <>
                <div className='searchHint__wrap'>
                    <div className="container">
                        <div>
                            <div style={{marginTop: '10px'}}>
                                <h3>Часто ищут</h3>
                                <div className="searchHint__block">
                                    {cacheMovies && cacheMovies.map((movie: any) => (
                                        <MiniHorizontalMovieCard movie={movie}/>
                                    ))}
                                </div>
                            <div/>
                            </div>
                            <div style={{marginTop: '30px'}}>
                                <h3>Актеры и режиссеры</h3>
                                <div className='searchHint__block'>
                                    {cachePeople && cachePeople.map((person: any) => (
                                        <div
                                            className="peopleList__card"
                                            key={person.id}
                                        >
                                            <NavLink
                                                className="peopleList__link"
                                                to={`/people/${person.id}`}
                                            >
                                                {person.name}
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div
                    style={{
                        display: isOpen ? 'block' : 'none'
                    }}
                    className="searchHint__blur"
                    onClick={toggleHint}
                >
                </div>
            </>
            }
        </>
    )
}

export default withRouter(SearchHint);