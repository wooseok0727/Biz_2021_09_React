import React from "react";
import AddrList from "./AddrList";
import "../css/AddrMain.css";

const AddrMain = () => {
  return (
    <div className="main_wrapper">
      <div className="table_title">ADDRESS BOOK</div>
      <AddrList />
    </div>
  );
};

export default AddrMain;
