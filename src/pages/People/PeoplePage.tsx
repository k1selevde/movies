import * as React from 'react'
import {withRouter} from 'react-router-dom'

interface IPeoplePageProps {
    match:any,
    history: any,
    location: any
}

class PeoplePage extends React.Component<IPeoplePageProps> {
    render() {
        const {match,location} = this.props;
        return(
            <>
                <div>People here</div>
                <div>match params: {match.params.id}</div>
            </>
        )
    }
}

export default withRouter(PeoplePage);