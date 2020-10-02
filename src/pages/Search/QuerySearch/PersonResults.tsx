import * as React from 'react'
import {searchResultPerson} from "../../../types/types";
import {NavLink} from 'react-router-dom'

interface IPersonResultsProps {
    clear: ()=> {}
    people: searchResultPerson[]
    findPerson: (page: string) => {}
    findPersonUpdate: (page: string) => {}
    value: string
}
interface IPersonResultsState {
    page: number
}

const PersonResults: React.FC<IPersonResultsProps> = ({people,value,findPerson,findPersonUpdate}) => {
    const [page,setPage] = React.useState(1)

    React.useEffect(() => {
        findPerson('1')
    }, [])



    React.useEffect(()=> {
        findPerson('1')
    }, [value])

    const showMoreHandler = () => {
        setPage(page+1)
        findPersonUpdate(String(page))
    }

    return (
            <>
                {people && people[0] &&
                <div><h4>Here is person results</h4>
                        <div className="container">
                            <div className="row">
                                {people.map((person: searchResultPerson) => (
                                    <div className="col-4">
                                        <NavLink key={person.id} to={`/people/${person.id}`}>
                                            <div>{person.name}</div>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={showMoreHandler}
                        >
                            Показать еще
                        </button>
                    </div>
                }
            </>
        )
}

export default PersonResults;