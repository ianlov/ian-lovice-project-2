import { Route } from "react-router-dom"


import './App.css';
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import PostGig from "./components/PostGig.jsx";





function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>

      <main>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" >
          <About />
        </Route>

        <Route path="/post" >
          <PostGig />
        </Route>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
