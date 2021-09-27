import React from "react";
import CounterButton from "./CounterButton";

const CounterView = ({ value, increment, decrement }) => {
  return (
    <div>
      <div>카운트: {value} </div>
      <CounterButton increment={increment} decrement={decrement} />
    </div>
  );
};

export default CounterView;
