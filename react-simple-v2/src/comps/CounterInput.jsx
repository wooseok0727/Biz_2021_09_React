import React from "react";

const CounterInput = ({ value, onChangeValue }) => {
  return (
    <div>
      <input placeholder="숫자입력" value={value} onChange={onChangeValue} />
    </div>
  );
};

export default CounterInput;
