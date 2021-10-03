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

const message = {
  name: "이름을 입력하세요",
  addr: "주소를 입력하세요",
  tel: "전화번호를 입력하세요",
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
    if (!addr.a_name) return message.name;
    if (!addr.a_addr) return message.addr;
    if (!addr.a_tel) return message.tel;
    setAddrList([...addrList, addr]);
    formClear();
    NextId.current++;
    return false;
  };

  const formClear = () => {
    setAddr({ ..._addrTemplete });
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
    formClear,
  };

  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
