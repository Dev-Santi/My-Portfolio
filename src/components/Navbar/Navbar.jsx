import Logo from "./Logo";
import Menu from "./Menu";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
