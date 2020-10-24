import * as React from 'react'
import {searchResultPerson} from "../../../types/types";
import {NavLink} from 'react-router-dom'
import PeopleList from "../../../components/common/PeopleLIst";
import ShowMoreBtn from "../../../components/common/UI/ShowMoreBtn";

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
                    <div>
                        <div className="container">
                                <PeopleList people={people.results} />
                        </div>
                        {!Boolean(people.total_pages + 1 <= page) && <ShowMoreBtn handler={showMoreHandler} /> }
                    </div>
                }
            </>
        )
}

export default PersonResults;