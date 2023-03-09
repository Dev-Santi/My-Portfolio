import { NavLink } from "react-router-dom";

const MenuList = ({ isActive }) => {
  return (
    <div>
      <ul className={isActive ? "menuList active" : "menuList"}>
        <li>
          <NavLink to="/My-Portfolio/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/My-Portfolio/proyects">PROYECTS</NavLink>
        </li>
        <li>
          <NavLink to="/My-Portfolio/about-me">ABOUT ME</NavLink>
        </li>
        <li>
          <NavLink to="/My-Portfolio/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
