import React from "react";

// About.jsx 는 src/comps 폴더에 있기 때문에
// src/css 폴더에 있는 about.css를 import하기 위한 경로 지정 주의
import "../css/about.css";

function About() {
  return (
    <div className="about">
      <h1>자기소개서</h1>
      <div>
        <label>이름</label>
        <span>우석</span>
      </div>
      <div>
        <label>생년월일</label>
        <span>2021.09.07</span>
      </div>
      <div>
        <label>전화번호</label>
        <span>010-111-1111</span>
      </div>
      <div>
        <label>주요특기</label>
        <span>?</span>
      </div>
      <div>
        <label>구현기술</label>
        <span>
          <ul>
            <li>Spring MVC</li>
            <li>Oracle DBMS</li>
            <li>MySQL DBMS</li>
            <li>HTML5</li>
            <li>CSS2 and CSS3</li>
            <li>Nodejs Web Server</li>
            <li>MongoDB NoSQL</li>
            <li>React App</li>
            <li>Android App</li>
            <li>Three.js</li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default About;
