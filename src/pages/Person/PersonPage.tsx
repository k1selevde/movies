import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reducers";
import {peopleActions} from "../../redux/actions/peopleActions";
import {getDetails} from '../../redux/actions/peopleActions'
import {personDetailsType} from "../../types/types";
import {objectIsNotEmpty} from "../../helpers/helpers";

interface IPeoplePageProps {
    match:any,
    history: any,
    location: any,
    details: null | personDetailsType,
    getDetails: (id: string) => Promise<void>
}

class PersonPage extends React.Component<IPeoplePageProps> {
    componentWillMount(): void {
        const id = this.props.match.params.id;
        //get details
        this.props.getDetails(String(id))
    }

    render() {
        const {match,details} = this.props;
        return(
            <>
                <div>People here</div>
                <div>match params: {match.params.id}</div>
                <div>{objectIsNotEmpty(details,'name') && details.name}</div>
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    details: state.people.details
})

export default connect(mapStateToProps, {
    getDetails: getDetails
})(withRouter(PersonPage));


