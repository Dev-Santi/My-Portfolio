import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./home.css";
import cover from "../../assets/cover.png";
import coverDesktop from "../../assets/cover-desktop.png";

const Home = () => {
  return (
    <div className="home">
      <h1 id="home-title">
        IF CAN BE <span>DESIGNED</span>
        <br />I CAN <span>PROGRAM IT</span>
      </h1>
      <p id="home-paragraph">
        Hey, I'm Santiago👋. I'm a <strong>frontend developer</strong> and this
        is my portfolio!
        <br />
        <br />
        Here you will be able to see information{" "}
        <NavLink to="/My-Portfolio/about-me">about me</NavLink>,{" "}
        <NavLink to="/My-Portfolio/proyects">my projects</NavLink> and how we
        can <NavLink to="/My-Portfolio/contact">get in touch</NavLink>
      </p>
      <div id="home-img" className="imgContainer">
        <img
          src={cover}
          alt="A phone, a tablet and a PC with a page in the screens showing responsive design"
        />
        <img
          src={coverDesktop}
          alt="A phone, a tablet and a PC with a page in the screens showing responsive design"
        />
      </div>
    </div>
  );
};

export default Home;
