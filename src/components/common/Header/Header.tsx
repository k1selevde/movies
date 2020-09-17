import * as React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login/Login'
import Search from "../../Search/Search"
import { Spinner } from 'reactstrap';
import Nav from './Nav'
interface Props {

}
interface  State {
}


class Header extends React.Component<Props,State> {
    render() {
        return (
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to="/" className="logo-link">
                                <span>THE MOVIE DB LOGO</span>
                            </Link>
                            <Spinner color="red" />
                        </div>
                        <div className="col">
                            <div className="float-right">
                                <Nav/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;