import React from "react";
import { NavLink } from "react-router-dom";
import "../css/menu.css";

const MainNav = () => {
  return (
    <ul className="main_menu">
      <li>
        <NavLink exact to="/" activeClassName="active_nav">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/write" activeClassName="active_nav">
          WRITE
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/login" activeClassName="active_nav">
          LOGIN
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/join" activeClassName="active_nav">
          JOIN
        </NavLink>
      </li>
    </ul>
  );
};

export default MainNav;
