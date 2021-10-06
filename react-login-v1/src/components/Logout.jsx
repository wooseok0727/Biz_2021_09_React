import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";

const Logout = () => {
  const history = useHistory();
  const { setUser } = useUserContext();

  useEffect(() => {
    const logout = async () => {
      await setUser([]);
      history.replace("/");
    };
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};

export default Logout;
