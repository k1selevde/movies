import * as React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reducers";
import {cleanPeopleDetail,getDetails,getExternalIDs} from "../../redux/actions/peopleActions";
import {PeopleExternalIDs, PersonDetailsType} from "../../types/types";
import {objectIsNotEmpty} from "../../helpers";


//@ts-ignore
import homepage from "../../assets/icons/homepage.svg"
//@ts-ignore
import defaultImage from '../../assets/img/noImagePeople.png'
import ExternalIDS from "./ExternalIDS";

function getBirthday(b: string) {
    return b.split('-').join(' ')
}


interface IPeoplePageProps {
    ids: null | PeopleExternalIDs,
    details: null | PersonDetailsType,
    getDetails: (id: string) => Promise<void>,
    cleanPeopleDetail: () => {},
    getExternalIDs: (id: string) => Promise<void>
}

const PersonPage : React.FC<IPeoplePageProps & RouteComponentProps> = ({
                                                                           match,
                                                                           details,
                                                                           ids,
                                                                           getDetails,
                                                                           cleanPeopleDetail,
                                                                           getExternalIDs
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
        getExternalIDs(id)
        return function cleanPeople() {
            cleanPeopleDetail()
        };
    }, [match.params])



    return (
            <>
                { details &&
                    <>
                        <div
                            className="personPage__header"
                        >
                            <div className="personPage__img-block">
                                {details.profile_path && <img
                                    className="personPage__img"
                                    src={details.profile_path ? `https://image.tmdb.org/t/p/w500/${details.profile_path}` : defaultImage}
                                    alt="photo"
                                />}
                            </div>
                            <div className="personPage__data">
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div><h4
                                        className="personPage__name"
                                    >{details.name}<span className="personPage__role" >({Boolean(details.known_for_department) && details.known_for_department})</span></h4></div>
                                    {details.homepage &&
                                        <div><a
                                            style={{textDecoration: "none"}}
                                            target="_blank"
                                            href={details.homepage}
                                            className="personPage__homepage"
                                        >
                                            <img
                                                className="personPage__homepage--img"
                                                src={homepage}
                                                alt="homepage-link"
                                            />
                                            <span
                                                className="personPage__homepage--link"

                                            >
                                        личный сайт
                                    </span>
                                        </a></div>
                                    }
                                </div>
                                    <div className="personPage__birth">
                                        {Boolean(details.birthday) && getBirthday(details.birthday)}, {details.place_of_birth}
                                    </div>
                                     <div className="personPage__socialContainer">
                                         {Boolean(ids) && <ExternalIDS ids={ids}/>}
                                     </div>

                            </div>
                        </div>

                        <div className="personPage__biography">
                            {details.biography}
                        </div>
                    </>
                }
            </>
    )

}

const mapStateToProps = (state: AppStateType) => ({
    details: state.people.details,
    ids: state.people.ids
})

export default connect(mapStateToProps, {
    cleanPeopleDetail,
    getDetails,
    getExternalIDs
})(withRouter(PersonPage));


