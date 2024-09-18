import { Link } from "react-router-dom";

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