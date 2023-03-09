import { NavLink } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>
        IF CAN BE <span>DESIGNED</span>
        <br />
        CAN BE <span>PROGRAMMED</span>
      </h1>
      <p>
        Hey, I'm Santiago👋! I'm a <strong>frontend developer</strong> and this
        is my portfolio.
        <br />
        <br />
        Here you will be able to see information{" "}
        <NavLink to="/about-me">about me</NavLink>,{" "}
        <NavLink to="/proyects">my projects</NavLink> and how we can{" "}
        <NavLink to="/contact">get in touch</NavLink>
      </p>
      <div className="imgContainer">
        <img
          src="../src/assets/cover.png"
          alt="A phone, a tablet and a PC with a page in the screens, showing responsive design"
        />
      </div>
    </div>
  );
};

export default Home;
