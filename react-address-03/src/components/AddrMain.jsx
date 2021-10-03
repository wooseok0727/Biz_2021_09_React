import AddrList from "./AddrList";
import "../css/AddrMain.css";
import { useAddrContext } from "../context/AppContextProvider";
import { useState } from "react";
import InputModal from "./InputModal";

const AddrMain = () => {
  const { onInsert } = useAddrContext();

  const [modal, setModal] = useState(false);

  const onInsertClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    onInsert() === false && setModal(false);
  };
  return (
    <div className="main_wrapper">
      <div className="table_title">
        <p>ADDRESS BOOK</p>
        <span className="btn_insert" onClick={onInsertClick}></span>
      </div>
      <AddrList />
      {modal && (
        <InputModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
      )}
    </div>
  );
};

export default AddrMain;
