import * as React from 'react'
import {movieCreditsType, movieCreditType} from "../../../types/types";
import {NavLink} from "react-router-dom";

interface IMovieCreditsProps {
    credits: movieCreditType[],
    getCredits:() => Promise<void>
}

class MovieCredits extends React.Component<IMovieCreditsProps> {

    componentDidMount(): void {
        console.log('CREDIT COMPONENT MOUNT')
        this.props.getCredits()
    }

    render() {
        const {credits} = this.props;
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
}


export default MovieCredits;