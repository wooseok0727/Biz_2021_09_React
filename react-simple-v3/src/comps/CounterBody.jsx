import React from "react";
import CounterInput from "./CounterInput";
import CounterView from "./CounterView";

const CounterBody = ({ number, onChangeValue }) => {
  return (
    <>
      <CounterInput number={number} onChangeValue={onChangeValue} />
      <CounterView number={number} />
    </>
  );
};

export default CounterBody;
