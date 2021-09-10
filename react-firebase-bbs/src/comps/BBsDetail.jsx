import React from "react";
import "../css/detail.css";

const BBsDetail = () => {
  return (
    <div className="bbs_detail">
      <div className="detail_box">
        <h1>BBS DETAIL</h1>
        <div>
          <label>DATE</label>
          <span>2021-09-09</span>
        </div>
        <div>
          <label>TIME</label>
          <span>11:12:00</span>
        </div>
        <div>
          <label>WRITER</label>
          <span>홍길동</span>
        </div>
        <div>
          <label>SUBJECT</label>
          <span>REACT BBS</span>
        </div>
        <div>
          <label>CONTENT</label>
          <span>REACT FIREBASE BBS</span>
        </div>
      </div>
    </div>
  );
};

export default BBsDetail;
