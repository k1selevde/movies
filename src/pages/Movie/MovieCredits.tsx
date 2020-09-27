import * as React from 'react'
import {movieCreditType} from "../../types/types";

interface IMovieCreditsProps {
    credits: any,
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
                    <div key={credit.id}>
                        {credit.name}
                    </div>
                ))}
            </div>
        )
    }
}


export default MovieCredits;