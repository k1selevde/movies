import * as React from 'react'
import {findOftenPeople} from "../../../redux/actions/searchActions";
import {NavLink} from "react-router-dom";
import {searchResultPerson} from "../../../types/types";
import PeopleList from "../../../components/common/PeopleLIst";
import ShowMoreBtn from "../../../components/common/UI/ShowMoreBtn";

interface IOftenFindPeopleProps {
    oftenPeople: null | any
    findOftenPeople: () => Promise<void>
    updateOftenPeople: (page: string) => Promise<void>
    clear: () => {}
}

const OftenFindPeople: React.FC<IOftenFindPeopleProps> = ({clear, oftenPeople, findOftenPeople, updateOftenPeople}) => {

    const [page, setPage] = React.useState(2)

    React.useEffect(() => {
        findOftenPeople()
        return () => {
            clear()
        }
    }, [])


    const showMoreHandler = async () => {
        updateOftenPeople(String(page))
        await setPage(page + 1)
    }

    return (
        <>
            {oftenPeople && oftenPeople.results && oftenPeople.results[0] &&
                <>
                    <div>
                        <div className="container">
                            <PeopleList people={oftenPeople.results} />
                        </div>
                    </div>
                    {!Boolean(oftenPeople.total_pages + 1 <= page) && <ShowMoreBtn handler={showMoreHandler} />}
                </>
            }
        </>
    )
}

export default OftenFindPeople