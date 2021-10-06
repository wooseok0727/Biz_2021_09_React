import React from "react";
import { Route } from "react-router";
import MainNav from "./MainNav";
import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";

const MainComp = () => {
  const navList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "Notice", link: "/notice" },
    { id: 2, title: "Board", link: "/board" },
    { id: 3, title: "Login", link: "/login", align: true },
    { id: 4, title: "Join", link: "/join" },
  ];

  return (
    <MainNav navList={navList}>
      <Route path="/login" component={LoginForm} />
      <Route path="/join" component={JoinForm} />
    </MainNav>
  );
};

export default MainComp;
