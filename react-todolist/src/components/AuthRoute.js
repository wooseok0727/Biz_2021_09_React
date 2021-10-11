import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import { fetchUser } from "../modules/fetchModule";

const AuthRoute = ({ children }) => {
  const { setUser } = useUserContext();
  const history = useHistory();

  const fetchCb = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userid) {
      await setUser(resultUser);
    } else {
      history.replace("/login");
    }
  }, [setUser, history]);

  useEffect(fetchCb, [fetchCb]);

  return <>{children}</>;
};

export default AuthRoute;
