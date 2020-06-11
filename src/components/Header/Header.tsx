import * as React from 'react'
import {Link} from 'react-router-dom'
import ControlLoginBtn from "../ControlLoginBtn/ControlLoginBtn";
import Search from "../Search/Search"
import { Spinner } from 'reactstrap';
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
                            <Search />
                        </div>
                        <div className="col">
                            <div className="float-right">
                                <ControlLoginBtn/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Header;