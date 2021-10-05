import React, { useState } from "react";
import "../css/LoginForm.css";

const LoginForm = () => {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async () => {
    const response = await fetch("http://localhost:8080/users");
    if (response.ok) {
      const users = await response.json();
      const user = users.find((item) => item.userid === account.userid);

      if (!user) {
        alert("아이디가 없습니다");
        return;
      }
      if (user.password !== account.password) {
        alert("비밀번호가 틀렸습니다");
        return;
      }
      alert("로그인 성공");
    }
  };

  return (
    <div className="login_form">
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
      <button onClick={onLogin}>로그인</button>
    </div>
  );
};

export default LoginForm;
