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
        <div className="externalID__wrap" style={{display: 'flex', maxWidth: '100px', justifyContent: 'center', alignItems: 'center'}} >
            <div>{ids.facebook_id &&
                 <a href={'https://facebook.com/' + ids.facebook_id} target="_blank" style={{padding: '0px', margin: '0px'}}><FacebookID height={height} id={ids.facebook_id}/> </a>}
            </div>
            <div>
                {ids.instagram_id && <a href={'https://instagram.com/' + ids.instagram_id} target="_blank" style={{padding: '0px', margin: '0px'}}><InstagramID height={height} id={ids.instagram_id}/></a>  }
            </div>
            <div>
                {ids.twitter_id && <a href={'https://twitter.com/' + ids.twitter_id} target="_blank" style={{padding: '0px', margin: '0px'}} ><TwitterID height={height} id={ids.twitter_id}/></a>}
            </div>
        </div>
    );
}

export default ExternalIDS;