import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/post" >Post Gig</Link>
      <Link to="/about" >About Sing Song</Link>
    </nav>
  )
}

export default Nav;