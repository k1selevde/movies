import * as React from 'react'
import {NavLink} from 'react-router-dom'

interface INotFoundProps {
    linkToBack?: string,
    textToBack?: string,
    img?: string,
    text?: string
}

const goodText = 'Возможно, вы воспользовались недействительной ссылкой или страница была удалена. Проверьте URL-адрес или перейдите на главную страницу, там вас ожидают лучшие фильмы и сериалы.'
const goodTitle = 'Такой страницы нет'

const NotFound: React.FC<INotFoundProps> = ({
                                                linkToBack = '',
                                                textToBack = '',
                                                text= 'Простите, страница не найдена . . .',
                                                img= ''
                                            }) => {
    return (
        <>
            <div>
                <NavLink to={linkToBack}>
                    {textToBack}
                </NavLink>
                {text && <p>{text}</p>}
                {img && <img src={`${img}`} alt="sorry,men"/>}
            </div>
        </>
    );
}

export default NotFound;