import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProjectsHome() {
    return(
        <div>
            <h2>Projects</h2>
            <ul>
                <li><Link to="/projects/cardmatching">Cardmatching</Link></li>
            </ul>
        </div>
    )
}

export default ProjectsHome;