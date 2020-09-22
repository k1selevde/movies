import * as React from 'react'
import {withRouter} from "react-router-dom";

interface ISpecialPageProps  {
    history: any,
    location: any,
    match: any
}


class SpecialPage extends React.Component<ISpecialPageProps> {
    render() {
        const {history,location,match} = this.props
        return (
            <>
                <div>special</div>
                <div>location: {location}</div>
                <div>match params query: {match.params.query}</div>
            </>
        )
    }
}

export default withRouter(SpecialPage);