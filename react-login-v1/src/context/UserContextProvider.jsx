import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useUserContext = () => useContext(AppContext);

const UserContextProvider = ({ children }) => {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const propsStore = { account, setAccount };
  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
};

export default UserContextProvider;
