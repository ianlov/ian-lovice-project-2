import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" ><h1>Home</h1></Link>
      <Link to="/post" ><h1>Post Gig</h1></Link>
      <Link to="/about" ><h1>About</h1></Link>
    </nav>
  )
}

export default Nav;