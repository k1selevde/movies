import * as React from 'react'
import {NavLink} from 'react-router-dom'

interface INotFoundProps {
    linkToBack?: string,
    textToBack?: string,
    img?: string
}




const NotFound: React.FC<INotFoundProps> = ({linkToBack = '',textToBack = ''}) => {
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