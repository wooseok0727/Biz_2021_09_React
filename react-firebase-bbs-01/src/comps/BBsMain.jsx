import React, { useEffect, useState, useRef } from "react";
import "../css/BBs.css";
import { firestore } from "../config/BBSConfig";

const BBsMain = () => {
  const [bbsBody, setBBsBody] = useState([]);
  const bbsRef = useRef();
  console.log(bbsBody === bbsRef.current);
  const firebaseFetch = () => {
    if (bbsBody !== bbsRef.current) {
      const bbsArray = [];
      firestore
        .collection("bbs")
        .get()
        .then((bbsList) => {
          bbsList.forEach((bbs) => {
            const item = bbs.data();
            bbsArray.push([
              ...bbsBody,
              <tr>
                <td>{item.b_date}</td>
                <td>{item.b_time}</td>
                <td>{item.b_writer}</td>
                <td>{item.b_subject}</td>
              </tr>,
            ]);
          });
          bbsRef.current = bbsArray;
          setBBsBody(bbsArray);
        });
    }
  };
  useEffect(firebaseFetch, [bbsBody]);

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
