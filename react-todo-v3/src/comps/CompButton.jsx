import React from "react";

const CompButton = ({ children, onClick, onKeyPress }) => {
  const btnStyle = {
    backgroundColor: "blue",
    color: "white",
  };
  return (
    <button style={btnStyle} onClick={onClick} onKeyPress={onKeyPress}>
      {children}
    </button>
  );
};

export default CompButton;
