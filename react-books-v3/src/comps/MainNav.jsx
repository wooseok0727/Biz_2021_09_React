import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

/**
 *  navigation 모양을 디자인한 컴포넌트
 */

const MainNav = () => {
  return (
    <nav className="main_nav">
      <NavLink to="/" exact>
        HOME
      </NavLink>
      <NavLink to="/insert" exact>
        INSERT
      </NavLink>
      <NavLink to="/list" exact>
        LIST VIEW
      </NavLink>
    </nav>
  );
};

export default MainNav;
