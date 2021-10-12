import { createContext, useContext, useRef, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const inputId = useRef(null);
  const inputPW = useRef(null);

  const propsData = { user, setUser, inputId, inputPW };

  return (
    <UserContext.Provider value={propsData}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
