import { IconContext } from "react-icons";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="home-footer">
      {"< "}
      <IconContext.Provider value={{ color: "white", size: "4rem" }}>
        <a href="mailto:bauzalarrosasantiago@correo.com" target="_blank">
          <AiOutlineMail />
        </a>
        <a href="https://wa.me/+59897111899" target="_blank">
          <AiOutlineWhatsApp />
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
      </IconContext.Provider>
      {" />"}
    </footer>
  );
};

export default Footer;
