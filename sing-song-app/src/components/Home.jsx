import { Link } from "react-router-dom";

const Home = ({ gigs }) => {

  return (
    <div>
      <h1>Live Music Underground</h1>
      <p>Welcome to Live Music Underground. We connect music lovers to live performers. Post or search.</p>
      <Link to="/post" ><p>Post Gig</p></Link>
      <Link to="/gigs" ><p>Search Gigs</p></Link>
      <Link to="/about" ><p>About</p></Link>
    </div>
  )
}

export default Home;