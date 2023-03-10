import { NavLink } from "react-router-dom";
import "./home.css";
import cover from "../../assets/cover.png";
import coverDesktop from "../../assets/cover-desktop.png";

const Home = () => {
  return (
    <div className="home">
      <h1 id="index-title">
        IF YOU CAN <span>DESIGN IT</span>
        <br />I CAN <span>PROGRAM IT</span>
      </h1>
      <p id="index-pg">
        Hey, I'm Santiago👋! I'm a <strong>frontend developer</strong> and this
        is my portfolio.
        <br />
        <br />
        Here you will be able to see information{" "}
        <NavLink to="/My-Portfolio/about-me">about me</NavLink>,{" "}
        <NavLink to="/My-Portfolio/proyects">my projects</NavLink> and how we
        can <NavLink to="/My-Portfolio/contact">get in touch</NavLink>
      </p>
      <div id="index-img" className="imgContainer">
        <img
          src={cover}
          alt="A phone, a tablet and a PC with a page in the screens showing responsive design"
        />
        <img
          src={coverDesktop}
          alt="A phone, a tablet and a PC with a page in the screens showing responsive design"
        />
      </div>
      <span id="bar" className="bar"></span>
    </div>
  );
};

export default Home;
