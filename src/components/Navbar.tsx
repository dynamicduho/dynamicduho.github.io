import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav className="nav">
            <NavLink to="/" className="navTitle roboto-light">duho</NavLink>
            <ul>
                <li><NavLink className="roboto-light" to="/blog">Blog</NavLink></li>
                <li><NavLink className="roboto-light" to="/projects">Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;