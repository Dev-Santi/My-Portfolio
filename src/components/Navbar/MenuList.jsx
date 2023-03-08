import { NavLink } from "react-router-dom";

const MenuList = ({ isActive }) => {
  return (
    <div>
      <ul className={isActive ? "menuList active" : "menuList"}>
        <li>
          <NavLink to="/a">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/b">PROYECTS</NavLink>
        </li>
        <li>
          <NavLink to="/c">ABOUT ME</NavLink>
        </li>
        <li>
          <NavLink to="/d">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
