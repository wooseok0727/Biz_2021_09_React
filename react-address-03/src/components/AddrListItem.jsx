import React from "react";

const AddrListItem = ({ item, onRemoveClick }) => {
  return (
    <tr>
      <td>{item.a_id}</td>
      <td>{item.a_name}</td>
      <td>{item.a_addr}</td>
      <td>{item.a_tel}</td>
      <td>{item.a_age}</td>
      <td className="btn_remove" onClick={() => onRemoveClick(item.a_id)}></td>
    </tr>
  );
};

export default AddrListItem;
