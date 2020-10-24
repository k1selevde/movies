import * as React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reducers";
import {cleanPeopleDetail,getDetails} from "../../redux/actions/peopleActions";
import {PersonDetailsType} from "../../types/types";
import {objectIsNotEmpty} from "../../helpers/helpers";

interface IPeoplePageProps {
    details: null | PersonDetailsType,
    getDetails: (id: string) => Promise<void>,
    cleanPeopleDetail: () => {}
}

const PersonPage : React.FC<IPeoplePageProps & RouteComponentProps> = ({
                                                                           match,
                                                                           details,
                                                                           getDetails,
                                                                           cleanPeopleDetail
}) => {

    type personDetailType = {
        name: string,
        value: any
    }

    const personDetails = [
            {
                name: 'День рождения',
                value: details && details.birthday
            },
            {
                name: 'known_for_department',
                value: details && details.known_for_department
            },
            {
                name: 'deathday',
                value: details && details.deathday
            },
            {
                name: 'id',
                value: details && details.id
            },
            {
                name: 'name',
                value: details && details.name
            },
            {
                name: 'also_known_as',
                value: details && details.also_known_as
            },
            {
                name: 'gender',
                value: details && (details.gender == 1 ? 'Женщина' : 'Мужчина')
            },
            {
                name: 'biography',
                value: details && details.biography
            },
            {
                name: ' popularity',
                value: details && details.popularity
            },
            {
                name: ' place_of_birth',
                value: details && details.place_of_birth || 'Не указано'
            },
            {
                name: ' profile_path',
                value: details && details.profile_path
            },
            {
                name: ' adult',
                value: details && details.adult || false
            },
            {
                name: ' imdb_id',
                value: details && details.imdb_id
            },
            {
                name: ' homepage',
                value: details && details.homepage || 'нету :D'
            }
        ]

    React.useEffect(() => {
        //@ts-ignore
        const id = match.params.id;
        getDetails(id)
        console.log('match.params change : ', match.params)
        return function cleanPeople() {
            cleanPeopleDetail()
        };
    }, [match.params])


    return (
            <>
                <div>People here</div>
                {/*@ts-ignore*/}
                <div>match params: {match.params.id}</div>
                <div>{details && objectIsNotEmpty(details, 'name') && details.name}</div>
                <table>
                    <tbody>
                    {personDetails && personDetails.map((detail: personDetailType) => (
                        <>
                            {detail.value &&
                            <tr>
                                <th>{detail.name}</th>
                                <td>{detail.value}</td>
                            </tr>
                            }
                        </>
                    ))}
                    </tbody>
                </table>
            </>
    )

}

const mapStateToProps = (state: AppStateType) => ({
    details: state.people.details
})

export default connect(mapStateToProps, {
    cleanPeopleDetail,
    getDetails
})(withRouter(PersonPage));


