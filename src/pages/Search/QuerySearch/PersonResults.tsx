import * as React from 'react'
import {searchResultPerson} from "../../../types/types";
import {NavLink} from 'react-router-dom'

interface IPersonResultsProps {
    clear: ()=> {}
    people: {
        results: null | searchResultPerson[],
        total_pages: null | number
    }
    findPerson: (page: string) => {}
    findPersonUpdate: (page: string) => {}
    value: string
}
interface IPersonResultsState {
    page: number
}

const PersonResults: React.FC<IPersonResultsProps> = ({clear,people,value,findPerson,findPersonUpdate}) => {
    const [page,setPage] = React.useState(2)

    React.useEffect(() => {
        findPerson('1')
        // console.log('results: ',people.results)
        return () => {
            //clear people search results
            clear()
        }
    }, [])



    React.useEffect(()=> {
        findPerson('1')
        setPage(2)
    }, [value])

     const showMoreHandler = async () => {
        findPersonUpdate(String(page))
         await setPage(page+1)
     }

    return (
            <>
                {people && people.results && people.results[0] &&
                <div><h4>Here is person results</h4>
                        <div className="container">
                            <div className="row">
                                {people.results.map((person: searchResultPerson) => (
                                    <div key={person.id}
                                         className="col-4"
                                    >
                                        <NavLink  to={`/people/${person.id}`}>
                                            <div>{person.name}</div>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            disabled={people.total_pages+1 <= page}
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