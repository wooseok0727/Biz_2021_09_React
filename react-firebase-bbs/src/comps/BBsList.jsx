import React, { useState, useCallback } from "react";
import "../css/bbsList.css";

const headArray = ["DATA", "TIME", "WRITER", "SUBJECT"];

const bbsSampleDat = {
  b_id: "0001",
  b_date: "2021-09-09",
  b_time: "10:09:00",
  b_writer: "홍길동",
  b_subject: "BBS",
};
const BBsList = () => {
  const bbs_header = useCallback(() => {
    return headArray.map((title) => {
      return <th>{title}</th>;
    });
  }, []);

  const [bbsList, setBBsList] = useState([bbsSampleDat]);

  const list_body = bbsList.map((bbs) => {
    return (
      <tr>
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_subject}</td>
      </tr>
    );
  });

  return (
    <table className="bbs_list">
      <thead>
        <tr className="title_tr">{bbs_header()}</tr>
      </thead>
      <tbody>{list_body}</tbody>
    </table>
  );
};

export default BBsList;
