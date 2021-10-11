import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import { fetchLogout } from "../modules/fetchModule";

const Logout = () => {
  const history = useHistory();
  const { setUser } = useUserContext();

  const fetchCb = useCallback(async () => {
    await fetchLogout();
    await setUser([]);
    history.replace("/");
  }, [setUser, history]);
  useEffect(fetchCb, [fetchCb]);

  return <div></div>;
};

export default Logout;
