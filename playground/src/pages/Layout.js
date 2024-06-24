import {Outlet,Link} from "react-router-dom";
import '../App.css';

const Layout = () => {
    return(
        <>
            <nav className="NavBar">
                <li>
                    <Link to="/" className="LinkToPage">Home</Link>
                </li>
                <li>
                    <Link to="/playnow" className="LinkToPage">Play Now</Link>
                </li>
            </nav>
            <Outlet/>
        </>
    )
};

export default Layout;