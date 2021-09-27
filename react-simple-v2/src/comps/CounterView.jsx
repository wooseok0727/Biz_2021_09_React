import React from "react";

const CounterView = ({ number }) => {
  const plus = number && number + 20;
  const times = number && Math.pow(number, 2);

  return (
    <>
      <div>
        {number} 와 20의 합 : {plus}
      </div>
      <div>
        {number} 와 {number}의 곱 : {times}
      </div>
    </>
  );
};

export default CounterView;
