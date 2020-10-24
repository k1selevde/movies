import * as React from 'react'
import {NavLink} from 'react-router-dom';
import {searchResultPerson} from "../../types/types";

interface IPeopleLIst {
    people: searchResultPerson[]
}

const PeopleList: React.FC<IPeopleLIst> = ({people})  => {
    return (
        <div>
            <div className="peopleList__wrap">
                {people.map((person: searchResultPerson) => (
                    <div key={person.id} className="peopleList__card">
                        <NavLink
                            to={`/people/${person.id}`}
                            className="peopleList__link"
                        >
                            <div>{person.name}</div>
                        </NavLink>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default PeopleList;