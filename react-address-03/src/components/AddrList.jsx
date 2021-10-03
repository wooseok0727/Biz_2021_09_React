import React from "react";

const AddrList = () => {
  return (
    <table className="table_wrap">
      <thead className="table_header">
        <tr className="item_wrap">
          <th>ID</th>
          <th>Name</th>
          <th>Addr</th>
          <th>Tel</th>
          <th>Age</th>
        </tr>
      </thead>

      <tbody className="table_body">
        <tr className="item_wrap">
          <td>1231</td>
          <td>홍길동</td>
          <td>광주</td>
          <td>010-111-1111</td>
          <td>30</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AddrList;
