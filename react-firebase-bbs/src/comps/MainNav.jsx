import React from "react";
import { NavLink } from "react-router-dom";
import "../css/menu.css";

const MainNav = () => {
  const activeStyle = {
    backgroundColor: "#fb667a",
    color: "white",
  };
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/" activeStyle={activeStyle}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/write" activeStyle={activeStyle}>
          글쓰기
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeStyle={activeStyle}>
          로그인
        </NavLink>
      </li>
      <li>
        <NavLink to="/join" activeStyle={activeStyle}>
          회원가입
        </NavLink>
      </li>
    </ul>
  );
};

export default MainNav;
