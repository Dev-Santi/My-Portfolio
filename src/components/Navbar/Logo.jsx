import { NavLink, useLocation } from "react-router-dom";

const Logo = () => {
  let location = useLocation();
  let pathname = location.pathname;
  return (
    <NavLink to={"/My-Portfolio/"}>
      <div className="logo">
        <div className="bar" />
        <div className="text">
          <span>SANTIAGO LARROSA</span>
          <span>FRONTEND DEVELOPER</span>
        </div>
      </div>
    </NavLink>
  );
};

export default Logo;
