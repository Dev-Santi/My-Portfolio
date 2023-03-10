import { NavLink } from "react-router-dom";
import "./home.css";
import cover from "../../assets/cover.png";

const Home = () => {
  return (
    <div className="home">
      <h1>
        IF YOU CAN <span>DESIGN IT</span>
        <br />I CAN <span>PROGRAM IT</span>
      </h1>
      <p>
        Hey, I'm Santiago👋! I'm a <strong>frontend developer</strong> and this
        is my portfolio.
        <br />
        <br />
        Here you will be able to see information{" "}
        <NavLink to="/My-Portfolio/about-me">about me</NavLink>,{" "}
        <NavLink to="/My-Portfolio/proyects">my projects</NavLink> and how we
        can <NavLink to="/My-Portfolio/contact">get in touch</NavLink>
      </p>
      <div className="imgContainer">
        <img
          src={cover}
          alt="A phone, a tablet and a PC with a page in the screens showing responsive design"
        />
      </div>
    </div>
  );
};

export default Home;
