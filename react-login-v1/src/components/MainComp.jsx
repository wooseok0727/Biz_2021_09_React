import React from "react";
import { Route } from "react-router";
import MainNav from "./MainNav";
import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";
import Notice from "./Notice";
import Board from "./Board";
import { useUserContext } from "../context/UserContextProvider";
import Logout from "./Logout";

const MainComp = () => {
  const { user } = useUserContext();

  const navList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "Notice", link: "/notice" },
    { id: 2, title: "Board", link: "/board" },
    user?.userid
      ? { id: 3, title: "Logout", link: "/logout", align: true }
      : { id: 3, title: "Login", link: "/login", align: true },
    user?.userid
      ? { id: 4, title: "MyPage", link: "/myapage" }
      : { id: 4, title: "Join", link: "/join" },
  ];

  return (
    <MainNav navList={navList}>
      <Route path="/" exact>
        <h1>홈</h1>
      </Route>
      <Route path="/notice" exact component={Notice} />
      <Route path="/board" exact component={Board} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/join" exact component={JoinForm} />
    </MainNav>
  );
};

export default MainComp;
