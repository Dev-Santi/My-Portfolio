import Logo from "./Logo";
import MenuList from "./MenuList";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  const handleActive = () => {
    setIsActive(!isActive);
    setFirstTime(false);
  };

  return (
    <nav>
      <div className="navbar">
        <Logo />
        <button
          onClick={handleActive}
          className={
            firstTime
              ? "menuBtn"
              : isActive
              ? "menuBtn active"
              : "menuBtn closed"
          }
        >
          <span className="visually-hidden">menu</span>
          <span className={isActive ? "bar active" : "bar"}></span>
          <span className={isActive ? "bar active" : "bar"}></span>
          <span className={isActive ? "bar active" : "bar"}></span>
        </button>
      </div>
      <MenuList isActive={isActive} />
    </nav>
  );
};

export default Navbar;
