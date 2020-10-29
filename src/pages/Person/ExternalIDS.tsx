import * as React from 'react'
import FacebookID from "./IDS/FacebookID";
import InstagramID from "./IDS/InstagramID";
import TwitterID from "./IDS/TwitterID";
import {PeopleExternalIDs} from "../../types/types";

type IExternalIDSProps = {
    ids: null | PeopleExternalIDs
}

const ExternalIDS: React.FC<IExternalIDSProps>  = ({ids}) => {
    let height = '20px'
    return (
        <div style={{display: 'flex'}} >
            {ids.facebook_id && <a href={`www.facebook.com/${ids.facebook_id}`} ><FacebookID height={height} id={ids.facebook_id}/> </a>}
            {ids.instagram_id && <InstagramID height={height} id={ids.instagram_id} />}
            {ids.twitter_id && <TwitterID height={height} id={ids.twitter_id} />}
        </div>
    );
}

export default ExternalIDS;