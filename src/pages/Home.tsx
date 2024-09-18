import { Link } from "react-router-dom";
function Home() {
    return (
      <div>
        <div className="welcome">
          <h1>🫰 finger heart enthusiast</h1>
        </div>
        <div className="homepageBody">
          <div className="sectionTitle">
            <h2><Link to="/blog">Blog</Link></h2>
          </div>
          <div className="sectionItems">
            <ul>
              <li>
                <Link to="/blog/post1">Post 1</Link>
              </li>
              <li>
                <Link to="/blog/post2">Post 2</Link>
              </li>
              {/* Add more blog posts as needed */}
            </ul>
          </div>
  
          {/* Second row: Projects */}
          <div className="sectionTitle">
            <h2><Link to="/projects">Projects</Link></h2>
          </div>
          <div className="sectionItems">
            <ul>
              <li>
                <Link to="/projects/cardmatching">Card Matching</Link>
              </li>
              <li>
                <Link to="/projects">Placeholder</Link>
              </li>
              {/* Add more projects as needed */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  

export default Home;