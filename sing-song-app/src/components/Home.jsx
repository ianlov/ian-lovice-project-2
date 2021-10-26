import { Link } from "react-router-dom";

const Home = ({ gigs }) => {

  return (
    <div>
      <div className="title" >
        <h1>Live Music Underground</h1>
      </div>
      <p>Welcome to Live Music Underground. We connect music lovers to live performers. Post your gig -- big or small. Or search for something happening in your city.</p>
      <div className="home-links" >
        <Link to="/post" ><p>Post Gig</p></Link>
        <Link to="/gigs" ><p>Search Gigs</p></Link>
        <Link to="/about" ><p>About</p></Link>
      </div>
    </div>
  )
}

export default Home;