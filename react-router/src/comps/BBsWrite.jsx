import React from "react";
import "../css/write.css";

function BBsWrite() {
  return (
    <div className="bbs_write">
      <div>
        <label>작성일자</label>
        <input type="text" />
      </div>
      <div>
        <label>작성시각</label>
        <input type="text" />
      </div>
      <div>
        <label>글쓴이</label>
        <input type="text" />
      </div>
      <div>
        <label>제목</label>
        <input type="text" />
      </div>
      <div>
        <label>내용</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default BBsWrite;
