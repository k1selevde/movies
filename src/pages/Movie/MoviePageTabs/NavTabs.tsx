import * as React from 'react'
import {withRouter} from "react-router";
import {NavLink} from "react-router-dom";

type tabType = {
    link: string,
    path: string
}

interface INavTabsProps {
    history: any,
    match: any,
    location: any
}

const NavTabs: React.FC<INavTabsProps>  = ({match}) => {
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
        <div>
            <ul>
                {tabs.map((tab: tabType,index: number) => (
                    <li className="movie-tabs__item" key={index}>
                        <NavLink to={`${match.url}/${tab.path}`} className="tab-link">
                            {tab.link}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withRouter(NavTabs);