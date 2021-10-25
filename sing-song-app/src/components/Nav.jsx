import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/gigs" ><h1>Search</h1></Link>
      <Link to="/" ><h1>Live Music Underground</h1></Link>
      <Link to="/post" ><h1>Post</h1></Link>
    </nav>
  )
}

export default Nav;