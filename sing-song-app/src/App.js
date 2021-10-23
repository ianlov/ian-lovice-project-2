import { Route } from "react-router-dom"
import { useState } from "react";


import './App.css';
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import PostGig from "./components/PostGig.jsx";
import ShowGig from "./components/ShowGig.jsx"





function App() {
  const [toggleFetch, setToggleFetch] = useState(true);

  return (
    <div>
      <nav>
        <Nav />
      </nav>

      <main>
        <Route path="/" exact>
          <Home 
            toggleFetch={toggleFetch}
          />
        </Route>

        <Route path="/about" >
          <About />
        </Route>

        <Route path="/post" >
          <PostGig 
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path="/gigs" >
          <ShowGig
            gigs={gigs}
          />
        </Route>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
