import "../css/AuthForm.css";
import { useState } from "react";

const JoinForm = () => {
  const [joinUser, setJoinUser] = useState({
    userid: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const onChange = (e) => {
    setJoinUser({ ...joinUser, [e.target.name]: e.target.value });
  };

  const onJoin = async () => {
    if (!joinUser.userid) {
      alert("아이디를 입력해야 합니다");
      return;
    }

    if (!joinUser.password) {
      alert("비밀번호를 입력해야 합니다");
      return;
    }

    if (!joinUser.passwordConfirm) {
      alert("비밀번호 확인을 입력해 주세요");
      return;
    }

    if (joinUser.password !== joinUser.passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      return;
    }

    if (!joinUser.email) {
      alert("이메일 주소는 필수 항목입니다");
      return;
    }

    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: joinUser.userid,
        password: joinUser.password,
        email: joinUser.email,
      }),
    });

    if (response?.ok) {
      const user = await response.json();
      console.log(user);
    }
  };

  return (
    <div className="auth_form">
      <input
        name="userid"
        value={joinUser.userid}
        placeholder="아이디를 입력해주세요"
        autoComplete="off"
        onChange={onChange}
      />
      <input
        name="password"
        value={joinUser.password}
        placeholder="비밀번호를 입력해주세요"
        autoComplete="off"
        type="password"
        onChange={onChange}
      />
      <input
        name="passwordConfirm"
        value={joinUser.passwordConfirm}
        placeholder="비밀번호를 한번 더 입력해주세요"
        autoComplete="off"
        type="password"
        onChange={onChange}
      />
      <input
        name="email"
        value={joinUser.email}
        placeholder="E-mail을 입력해주세요"
        autoComplete="off"
        type="email"
        onChange={onChange}
      />
      <button onClick={onJoin}>회원가입</button>
    </div>
  );
};

export default JoinForm;
