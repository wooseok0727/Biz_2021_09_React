import React from "react";

const AddressList = ({ addrBook }) => {
  const viewList = addrBook.map((addr, index) => {
    return (
      <tr key={addr.a_id}>
        <td>{index + 1}</td>
        <td>{addr.a_name}</td>
        <td>{addr.a_addr}</td>
        <td>{addr.a_tel}</td>
        <td>{addr.a_age}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>주소</th>
          <th>전화번호</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
};

export default AddressList;
