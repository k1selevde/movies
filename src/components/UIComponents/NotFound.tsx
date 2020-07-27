import * as React from 'react'
import {NavLink} from 'react-router-dom'

interface Props {
    linkToBack?: string,
    textToBack?: string
}

interface State {

}


const NotFound: React.FC<Props> = ({linkToBack,textToBack}) => {
    return (
        <>
            <div>
                <NavLink to={linkToBack}>
                    {textToBack}
                </NavLink>
                <p>Простите, страница не найдена . . .</p>
            </div>
        </>
    );
}

export default NotFound;