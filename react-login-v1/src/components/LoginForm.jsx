import React, { useState } from "react";
import "../css/AuthForm.css";
import { useUserContext } from "../context/UserContextProvider";

const LoginForm = () => {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async () => {
    if (!account.userid) return alert("아이디를 입력하세요");
    if (!account.password) return alert("비밀번호를 입력하세요");
    const response = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });

    // 서버로 부터 정상적인 응답이 오면
    // 실제 서버가 멈춰있는 상태일 경우 response 자체가 undefined 또는 null 값이다
    // if(res) {} 연산을 하면 res가 정상인지 확인할 수 있다
    // res가 정상이 아닐떄는 res.ok 에서 오류가 발생을 한다
    // ES6+ 버전에서 safe null 검사를 수행하는 코드가 있다
    // response 가 정상(null, undefined 가 아니면 .ok 속성을 검사하라)
    // null 로 인한 오류를 방지하는 코드다

    if (response.status === 401) {
      alert("아이디 또는 비밀번호를 확인하세요");
    }
    if (response?.ok) {
      const resultUser = await response.json();
      console.log("userid", account.userid);
      console.log("user", resultUser);
      //const user = users.find((item) => item.userid === account.userid);

      if (!resultUser?.userid) {
        alert("아이디가 없습니다");
        return;
      }
      if (resultUser.password !== account.password) {
        alert("비밀번호가 틀렸습니다");
        return;
      }
      alert("로그인 성공");
      setUser(resultUser);
    }
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
      <button onClick={onLogin}>로그인</button>
    </div>
  );
};

export default LoginForm;
