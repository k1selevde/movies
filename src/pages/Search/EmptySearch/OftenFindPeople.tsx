import * as React from 'react'
import {findOftenPeople} from "../../../redux/actions/searchActions";
import {NavLink} from "react-router-dom";

interface IOftenFindPeopleProps {
    oftenPeople: null | any
    findOftenPeople: () => Promise<void>
    updateOftenPeople: (page: string) => Promise<void>
}

const OftenFindPeople: React.FC<IOftenFindPeopleProps>  = ({oftenPeople, findOftenPeople, updateOftenPeople}) => {

    const [page,setPage] = React.useState(2)

    React.useEffect(() => {
        findOftenPeople()
    }, [])



    const showMoreHandler = async () => {
        updateOftenPeople(String(page))
        await setPage(page+1)
    }

    return (
        <>
            <h4>Актеры и режиссеры</h4>
            <div>
                <div className="container">
                    <div className="row">
                        {oftenPeople && oftenPeople.results && oftenPeople.results[0] && oftenPeople.results.map((person: any) => (
                            <div key={person.id}
                                 className="col-4"
                            >
                                <NavLink to={`/people/${person.id}`}>
                                    <div>{person.name}</div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button
                onClick={showMoreHandler}
            >
                Показать еще
            </button>
        </>
    )
}

export default OftenFindPeople