import React from "react";
import "../css/Modal.css";

const RemoveModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal_warp">
      <div className="modal_block">
        <h2>정말 삭제하시겠습니까?</h2>
        <div className="buttons">
          <button onClick={onConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
