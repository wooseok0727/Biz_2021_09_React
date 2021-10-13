import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../../context";
import google from "../..//google.json";

const AuthRoute = ({ children }) => {
  const { setUser } = useUserContext();
  const history = useHistory();

  const fetchCb = useCallback(async () => {
    if (!window.gapi) {
      alert("google API Not Found!!");
      history.replace("/login");
    }

    await window.gapi.auth2.init({
      client_id: google.web.client_id,
      scope: "profile email",
    });

    // gapi(google API)로 부터 auth2 객체를 조회하기
    const auth2 = await window.gapi?.auth2.getAuthInstance();
    if (!auth2) {
      history.replace("/login");
    }

    // 로그인 되어있는 사용자정보 getter
    const googleUser = await auth2.currentUser.get();
    const profile = await googleUser.getBasicProfile();

    if (!profile) {
      history.replace("/login");
    }

    const user = {
      userid: profile.getEmail(),
      name: profile.getName(),
      image: profile.getImageUrl(),
      Token: googleUser.getAuthResponse().id_token,
    };

    setUser(user);
  }, [setUser, history]);

  useEffect(fetchCb, [fetchCb]);

  return <>{children}</>;
};

export default AuthRoute;
