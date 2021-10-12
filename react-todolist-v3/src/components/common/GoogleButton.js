import { useEffect, useRef } from "react";
import "../../css/GoogleButton.css";
import { useUserContext } from "../../context";
import google from "../../google.json";

const GoogleButton = () => {
  const buttonRef = useRef();

  const { setUser } = useUserContext();

  const googleResponse = (result) => {
    const profile = result.getBasicProfile();
    const email = profile.getEmail();
    const id = profile.getId();
    const name = profile.getName();
    const image = profile.getImageUrl();
    const Token = result.getAuthResponse().id_token;

    setUser({
      userid: email,
      login_source: "GOOGLE",
    });
    alert(email + " 님 반갑습니다");
  };

  /**
   * public/index.html 파일에 script를 import 한다
   * src="https://apis.google.com/js/api:client.js"
   */

  const googleSDK_init = () => {
    if (!window.gapi) {
      alert("Google API NOT Found");
      return;
    }

    // google API 가 활성화되고
    // 활성화된 API중에서 auth2 가 loading(사용할 준비가 되면)
    window.gapi.load("auth2", async () => {
      const auth2 = await window.gapi.auth2.init({
        client_id: google.web.client_id,
        scope: "profile email",
      });
      if (auth2?.isSignedIn.get()) {
        console.log("로그인이 이미 된상태");
        // 원하는 곳으로 redirect
      }

      await auth2.attachClickHandler(buttonRef.current, {}, googleResponse);
    });
  };
  useEffect(googleSDK_init, [googleSDK_init]);

  const logout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2?.disconnect();
    alert("Logout OK!!!");
  };

  return (
    <div id="buttonWrapper">
      <div id="myGoogleBtn" ref={buttonRef}>
        <span className="icon"></span>
        <span className="buttonText">Google Login</span>
      </div>
      <span className="buttonText" onClick={logout}>
        Google Logout
      </span>
    </div>
  );
};

export default GoogleButton;
