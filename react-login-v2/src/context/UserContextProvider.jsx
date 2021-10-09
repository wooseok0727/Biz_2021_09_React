import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useUserContext = () => useContext(AppContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userid: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const propsStore = { user, setUser };
  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
};

export default UserContextProvider;
