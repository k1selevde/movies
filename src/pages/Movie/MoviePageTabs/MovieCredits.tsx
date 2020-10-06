import * as React from 'react'
import {movieCreditsType, movieCreditType} from "../../../types/types";
import {NavLink} from "react-router-dom";

interface IMovieCreditsProps {
    credits: movieCreditType[]
    id: string
    getCredits:() => Promise<void>
}

const MovieCredits : React.FC<IMovieCreditsProps> = ({id,credits,getCredits}) => {

    React.useEffect(() => {
        console.log(`new ID: ${id}`)
        getCredits()
    }, [id])

    return (
        <div>
            {credits && credits.map((credit: movieCreditType)=> (
                <NavLink
                    to={`/people/${credit.id}`}
                    key={credit.id}
                >
                    {credit.name}
                </NavLink>
            ))}
        </div>
    )
}


export default MovieCredits;