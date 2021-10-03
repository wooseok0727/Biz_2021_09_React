import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

export const useAddrContext = () => useContext(AppContext);

const _addrTemplete = {
  a_id: 0,
  a_name: "",
  a_addr: "",
  a_tel: "",
  a_age: "",
};

const AppContextProvider = ({ children }) => {
  const [addr, setAddr] = useState({ ..._addrTemplete });

  const [addrList, setAddrList] = useState([]);

  const NextId = useRef(1);

  const onChange = (e) => {
    const { name, value } = e.target;
    setAddr({ ...addr, a_id: NextId.current, [name]: value });
  };

  const onInsert = () => {
    if (!addr.a_name) return alert("이름을 입력하세요");
    if (!addr.a_addr) return alert("주소를 입력하세요");
    if (!addr.a_tel) return alert("전화번호를 입력하세요");
    setAddrList([...addrList, addr]);
    setAddr({ ..._addrTemplete });
    NextId.current++;
    return false;
  };

  const onRemove = (a_id) => {
    setAddrList(addrList.filter((addr) => addr.a_id !== a_id));
  };

  const propsStore = {
    addr,
    addrList,
    onChange,
    onInsert,
    onRemove,
  };

  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
