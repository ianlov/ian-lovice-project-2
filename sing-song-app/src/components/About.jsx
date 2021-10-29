import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This page was built as a General Assembly Software Engineering Immersive project. The goal was to create a space where live music performers could share their upcoming shows with people who love live music. Live Music Underground requires no login, so anyone can post or search.</p>
      
      <h1>See other projects</h1>
      <a href="https://www.linkedin.com/in/ian-lovice-839265b3/" target="_blank" rel="noreferrer" ><img className="social-icon" src={github} alt="not found" /></a>
      <a href="https://github.com/ianlov" target="_blank" rel="noreferrer" ><img className="social-icon" src={linkedin} alt="not found" /></a>
    </div>
  )
}

export default About;