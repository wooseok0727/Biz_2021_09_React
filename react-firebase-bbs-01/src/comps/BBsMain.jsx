import React, { useEffect, useState } from "react";
import "../css/BBs.css";
import { firestore } from "../config/BBSConfig";

const BBsMain = () => {
  const [bbsBody, setBBsBody] = useState([]);
  const firebaseFetch = () => {
    firestore
      .collection("bbs")
      .get()
      .then((bbsList) => {
        bbsList.forEach((bbs) => {
          const item = bbs.data();
          setBBsBody([
            ...bbsBody,
            <tr>
              <td>{item.b_date}</td>
              <td>{item.b_time}</td>
              <td>{item.b_write}</td>
              <td>{item.b_subject}</td>
            </tr>,
          ]);
        });
      });
  };

  useEffect(firebaseFetch, []);
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
      <tbody>{bbsBody}</tbody>
    </table>
  );
};

export default BBsMain;
