import { Link } from "react-router-dom";

const Home = ({ gigs }) => {

  return (
    <div>
      <h1>Introduction</h1>
      <p>Vel praesentium similique qui ut labore laudantium. Ut aut similique quis in expedita iure sapiente eos. Fugiat rerum nam architecto perspiciatis quibusdam autem. Ea corporis laboriosam nam expedita atque beatae natus officiis. Suscipit vel modi porro non tempore corrupti ipsum nesciunt. Et laborum cumque numquam.</p>
      <Link to="/gigs" >Search Gigs</Link>
    </div>
  )
}

export default Home;