import { NavLink } from "react-router-dom";

const MenuList = ({ isActive }) => {
  return (
    <div>
      <ul className={isActive ? "menuList active" : "menuList"}>
        <li>
          <NavLink to="/My-Portfolio/">
            <span className="bar bar-short"></span>HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/My-Portfolio/proyects">
            <span className="bar"></span>PROYECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/My-Portfolio/about-me">
            <span className="bar"></span>ABOUT ME
          </NavLink>
        </li>
        <li>
          <NavLink to="/My-Portfolio/contact">
            <span className="bar"></span>CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
