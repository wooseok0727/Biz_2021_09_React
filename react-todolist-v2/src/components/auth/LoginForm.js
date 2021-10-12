import React, { useState } from "react";
import { Button } from "../index";
import ink from "../../assets/ink.mp4";
import "../../css/LoginForm.css";
import { useUserContext } from "../../context/";
import { useHistory } from "react-router-dom";
import { fetchLogin } from "../../modules/fetchModule";

const LoginForm = () => {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async () => {
    if (!account.userid) return alert("아이디를 입력하세요");
    if (!account.password) return alert("비밀번호를 입력하세요");
    const resultUser = await fetchLogin(account.userid, account.password);
    await setUser(resultUser);
    history.replace("/");
  };

  return (
    <div className="auth_form">
      <video autoPlay muted>
        <source src={ink} type="video/mp4" />
      </video>
      <div className="inputs">
        <div className="userid">
          <input
            type="text"
            name="userid"
            autoComplete="off"
            onChange={onChange}
          />
          <span className="label">ID</span>
          <svg width="120px" height="26px" viewBox="0 0 120 26">
            <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25"></path>
          </svg>
          <span className="border"></span>
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            autoComplete="off"
            onChange={onChange}
          />
          <span className="label">PASSWORD</span>
          <svg width="120px" height="26px" viewBox="0 0 120 26">
            <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25"></path>
          </svg>
          <span className="border"></span>
        </div>
        <Button text="LOGIN" onClick={onLogin}>
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
