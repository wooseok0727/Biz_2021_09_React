import React, { useState } from "react";
import "../css/AuthForm.css";
import { useUserContext } from "../context/UserContextProvider";
import { useHistory } from "react-router-dom";
import Button from "../mycustom/Button";
import { fetchLogin } from "../modules/fetchModule";

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
      <input
        name="userid"
        placeholder="아이디를 입력해주세요"
        autoComplete="off"
        onChange={onChange}
      />
      <input
        name="password"
        placeholder="비밀번호를 입력해주세요"
        autoComplete="off"
        type="password"
        onChange={onChange}
      />
      <Button onClick={onLogin}>로그인</Button>
    </div>
  );
};

export default LoginForm;
