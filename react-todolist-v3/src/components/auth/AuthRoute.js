import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../../context";
import { fetchUser } from "../../modules/fetchModule";

const AuthRoute = ({ children }) => {
  const { setUser } = useUserContext();
  const history = useHistory();

  const fetchCb = useCallback(async () => {
    const resultUser = await fetchUser();
    if (!resultUser?.userid) {
      history.replace("/login");
    }
    setUser(resultUser);
  }, [setUser, history]);

  useEffect(fetchCb, [fetchCb]);

  return <>{children}</>;
};

export default AuthRoute;
