import React from "react";
import "../css/MainNav.css";
import { BrowserRouter, NavLink } from "react-router-dom";

const MainNav = ({ children, navList }) => {
  const activeStyle = {
    borderBottom: "3px solid #1f2739",
  };

  const align_right = {
    marginLeft: "auto",
  };

  const nav_item = navList.map((item) => (
    <li key={item.id} style={item.align && align_right}>
      <NavLink
        to={item.link}
        exact={item.title === "Home"}
        activeStyle={activeStyle}
      >
        {item.title}
      </NavLink>
    </li>
  ));

  return (
    <BrowserRouter>
      <ul className="main_nav">{nav_item}</ul>
      {children}
    </BrowserRouter>
  );
};

export default MainNav;
