import AddrList from "./AddrList";
import "../css/AddrMain.css";
import { useAddrContext } from "../context/AppContextProvider";
import { useState } from "react";
import InputModal from "./InputModal";

const AddrMain = () => {
  const { onInsert, formClear } = useAddrContext();

  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");

  const onInsertClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
    setMessage(false);
    formClear();
  };

  const onConfirm = () => {
    const result = onInsert();
    result === false && setModal(false);
    setMessage(result);
  };
  return (
    <div className="main_wrapper">
      <div className="table_title">
        <p>ADDRESS BOOK</p>
        <span className="btn_insert" onClick={onInsertClick}></span>
      </div>
      <AddrList />
      {modal && (
        <InputModal
          visible={modal}
          message={message}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default AddrMain;
