import React from "react";
import "../css/write.css";

const BBsWrite = () => {
  return (
    <div className="bbs_write">
      <div className="input_box">
        <h1>BBS WRITE</h1>
        <input name="b_writer" placeholder="작성자" autoComplete="off" />
        <input name="b_subject" placeholder="제목" autoComplete="off" />
        <textarea
          name="b_content"
          placeholder="내용"
          autoComplete="off"
        ></textarea>
        <button>SAVE</button>
      </div>
    </div>
  );
};

export default BBsWrite;
