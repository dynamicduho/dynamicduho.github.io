import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function BlogHome() {
    return(
            <div>
                <h2>Blog Posts</h2>
                <ul>
                    <li><Link to="/blog/intro">Intro Blog Post</Link></li>
                </ul>
            </div>
    )
}

export default BlogHome;