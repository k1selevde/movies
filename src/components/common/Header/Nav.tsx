import * as React from 'react'
import {NavLink} from 'react-router-dom'

type NavPropsType = {
}


const Nav: React.FC<NavPropsType>  = () => {
    let [navLinks,setNavLinks] = React.useState([
        {title:'Фильмы',link: '/movies'},
        {title:'ТВ-шоу', link: '/tv'},
        {title: 'Коллекции', link: '/special'}
        ])

    return (
        <div className="nav__wrapper">
            {navLinks.map(nav => (
                <div className="nav__item">
                    <NavLink
                        activeClassName='nav__link--active'
                        className="nav__link"
                        to={nav.link}
                    >
                        {nav.title}
                    </NavLink>
                </div>
            ))}

        </div>
    );
}

export default Nav;