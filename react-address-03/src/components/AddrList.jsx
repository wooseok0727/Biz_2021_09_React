import React, { useState } from "react";
import AddrListItem from "./AddrListItem";
import "../css/AddrList.css";
import RemoveModal from "./RemoveModal";
import { useAddrContext } from "../context/AppContextProvider";

const AddrList = () => {
  const { addrList, onRemove } = useAddrContext();
  const [modal, setModal] = useState(false);
  const [a_id, setA_id] = useState("");

  const onRemoveClick = (a_id) => {
    setModal(true);
    setA_id(a_id);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove(a_id);
  };

  const viewList = addrList.map((item) => {
    return (
      <AddrListItem item={item} key={item.a_id} onRemoveClick={onRemoveClick} />
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Addr</th>
            <th>Tel</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>{viewList}</tbody>
      </table>
      {modal && (
        <RemoveModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </>
  );
};

export default AddrList;
