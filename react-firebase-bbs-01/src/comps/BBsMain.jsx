import React from "react";
import "../css/BBs.css";

const BBsMain = () => {
  return (
    <table className="bbs_list">
      <thead>
        <tr>
          <th>DATE</th>
          <th>TIME</th>
          <th>WRITER</th>
          <th>SUBJECT</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default BBsMain;
