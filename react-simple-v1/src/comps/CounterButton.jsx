import React from "react";

const CounterButton = ({ increment, decrement }) => {
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  );
};

export default CounterButton;
