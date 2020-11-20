import * as React from 'react'
import {movieCreditsType, movieCreditType} from "../../../types/types";
import {NavLink} from "react-router-dom";
//@ts-ignore
import defaultImage from '../../../assets/img/defaultMovieCard.jpg'

//@ts-ignore
import NoImagePeople from '../../../assets/img/noImagePeople.png'


interface IMovieCreditsProps {
    credits: movieCreditType[]
    id: string
    getCredits:() => Promise<void>
}

const MovieCredits : React.FC<IMovieCreditsProps> = ({id,credits,getCredits}) => {
    let currentCredits;


    React.useEffect(() => {
        getCredits()
    }, [id])


    if (credits) {
        currentCredits = credits.length > 20 ? credits.slice(0,20) : credits;
    }

    return (
        <div className="credit__wrap" >
            {credits && currentCredits.map((credit: movieCreditType)=> (
                <NavLink
                    style={{textDecoration: 'none'}}
                    to={`/people/${credit.id}`}
                    key={credit.id}
                    className="credit__item"
                >
                        <img
                            className="credit__img"
                            src={credit.profile_path ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}` : NoImagePeople}
                            alt={'photo' + credit.name}
                        />

                    <p className="credit__name" >
                        {credit.name}
                    </p>
                </NavLink>
            ))}
        </div>
    )
}


export default MovieCredits;