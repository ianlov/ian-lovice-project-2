import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link id="link-home" to="/" ><h1>Home</h1></Link>
      <Link id="link-search" to="/gigs" ><h1>Search</h1></Link>
      <Link id="link-post" to="/post" ><h1>Post</h1></Link>
    </nav>
  )
}

export default Nav;