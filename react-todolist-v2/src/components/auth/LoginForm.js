import React, { useState } from "react";
import { Button, Modal } from "../index";
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

  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState();

  const history = useHistory();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onCheck = () => {
    if (!account.userid) return `PLEASE ENTER YOUR "ID"`;
    if (!account.password) return `PLEASE ENTER YOUR "PASSWORD"`;
    return false;
  };

  const onModal = () => {
    const result = onCheck();
    if (!result) {
      onLogin();
    } else {
      setModal(true);
      setMessage(result);
    }
  };

  const onConfirm = () => {
    setModal(false);
    setMessage(false);
  };

  const onLogin = async () => {
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
            className={account.userid && "focus"}
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
            className={account.password && "focus"}
          />
          <span className="label">PASSWORD</span>
          <svg width="120px" height="26px" viewBox="0 0 120 26">
            <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25"></path>
          </svg>
          <span className="border"></span>
        </div>
        <Button text="LOGIN" onClick={onModal}>
          LOGIN
        </Button>
      </div>
      {modal && <Modal title={message} onConfirm={onConfirm} />}
    </div>
  );
};

export default LoginForm;
