import * as React from 'react'
import {NavLink} from 'react-router-dom'

const Nav  = () => {
    return (
        <div className="nav__wrapper">
            <div className="nav__item">
                <NavLink to="/movies">
                    <div>Фильмы</div>
                </NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="/search">
                    <div>Поиск</div>
                </NavLink>
            </div>
        </div>
    );
}

export default Nav;