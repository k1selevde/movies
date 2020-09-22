import * as React from 'react'
import {NavLink} from 'react-router-dom'

type NavPropsType = {
}


const Nav: React.FC<NavPropsType>  = () => {
    let [navLinks,setNavLinks] = React.useState([
        {title:'Фильмы',link: '/movies'},
        {title:'ТВ-шоу', link: '/tv'}
        ])

    return (
        <div className="nav__wrapper">
            {navLinks.map(nav => (
                <div className="nav__item">
                    <NavLink to={nav.link}>
                        <div>{nav.title}</div>
                    </NavLink>
                </div>
            ))}

        </div>
    );
}

export default Nav;