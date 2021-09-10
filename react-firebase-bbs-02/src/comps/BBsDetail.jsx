import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { firestore } from "../config/BBSConfig";
import "../css/detail.css";

const BBsDetail = () => {
  const router = useHistory();
  const match = useRouteMatch();
  const docId = match.params.id;

  const [bbs, setBbs] = useState({
    b_date: "",
    b_time: "",
    b_writer: "",
    b_subject: "",
    b_content: "",
  });

  const findByIdFetch = useCallback(async () => {
    if (docId) {
      const result = await firestore.collection("bbs").doc(docId).get();
      if (result.data()) {
        setBbs(result.data());
      }
    }
  }, [docId]);

  useEffect(findByIdFetch, [findByIdFetch]);

  const onDelete = (e) => {
    if (window.confirm("삭제할까요?")) {
      firestore
        .collection("bbs")
        .doc(docId)
        .delete()
        .then(() => {
          router.push(`/`);
        });
    }
  };

  return (
    <div className="bbs_detail">
      <div className="detail_box">
        <h1>BBS DETAIL</h1>
        <div>
          <label>DATE</label>
          <span>{bbs.b_date}</span>
        </div>
        <div>
          <label>TIME</label>
          <span>{bbs.b_time}</span>
        </div>
        <div>
          <label>WRITER</label>
          <span>{bbs.b_writer}</span>
        </div>
        <div>
          <label>SUBJECT</label>
          <span>{bbs.b_subject}</span>
        </div>
        <div>
          <label>CONTENT</label>
          <span>{bbs.b_content}</span>
        </div>

        <div className="bbs_btn_box">
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            HOME
          </button>
          <button
            onClick={() => {
              router.push(`/write/${docId}`);
            }}
          >
            MODIFY
          </button>
          <button onClick={onDelete}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default BBsDetail;
