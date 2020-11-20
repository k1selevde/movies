import * as React from 'react'
import {withRouter} from "react-router";
import {NavLink, RouteComponentProps} from "react-router-dom";

type tabType = {
    link: string,
    path: string
}

interface INavTabsProps {
    id: string
}

const NavTabs: React.FC<INavTabsProps & RouteComponentProps>  = ({id,match}) => {
    const _onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
    }

    React.useEffect(() => {
        console.log(`${match.url} === ${location.pathname}`)
    }, [match])

    const [tabs,setTabs] = React.useState([
        {
            link: "Детали",
            path: ""
        },
        {
            link: "Видео",
            path: "videos"
        },
        {
            link: "Актеры",
            path: "credits"
        },
        {
            link: "Отзывы",
            path: "reviews"
        }

    ])
    return (
        <div className="navTabs__container">
            <ul className="movieTabs__ul" >
                {tabs.map((tab: tabType,index: number) => (
                    <li className="movieTabs__item" key={index}>
                        <NavLink
                            exact={true}
                            //to={`${match.url}${[tab.path] ? '/' : ''}${tab.path}`}
                            to={`/movie/${id}/${tab.path}`}
                            className="movieTabLink"
                            activeClassName="movieTabLink__active"
                            onClick={(`${match.url}/${tab.path}` === `${location.pathname}`) ? (e) => _onClick(e) : null}
                        >
                            {tab.link}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withRouter(NavTabs);