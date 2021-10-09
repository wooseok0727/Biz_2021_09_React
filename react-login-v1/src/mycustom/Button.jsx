import React from "react";

const Button = ({ children, onClick, backGround = "#1f2739" }) => {
  const btnStyle = {
    outline: "none",
    border: "none",
    background: backGround,
    color: "white",
    padding: "0.5rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "3px",
  };

  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
