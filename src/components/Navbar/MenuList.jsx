import { NavLink } from "react-router-dom";

const MenuList = ({ isActive }) => {
  return (
    <div>
      <ul className={isActive ? "menuList active" : "menuList"}>
        <li>
          <NavLink to="/home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/proyects">PROYECTS</NavLink>
        </li>
        <li>
          <NavLink to="/about-me">ABOUT ME</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
