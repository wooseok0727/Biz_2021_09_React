import React, { useState } from "react";
import { RenderSquare } from "../modules/Main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [flag, setFlag] = useState(true);
  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // return <div>{RenderSquare()}</div>;

  // squares 배열의 index 번째 요소의 값을
  // 변경하려고 한다
  // 매개변수로 index 값
  const onSqClick = (e) => {
    const sq_index = e.target.dataset.id;
    if (squares[sq_index]) return;
    // squares[sq_index] = "B"; 절대 불가

    // const _squares = squares
    // 배열을 다른 배열에 할당(저장)하면 배열의 값이
    // 복제되지 않고 배열이 저장된 저장소 위치가 복제된다
    // 결국 _squares 와 sqares 는 같은 배열이다
    // A 라는 사람과 B라는 사람이 한 집을 같이 공유하는 것
    // 배열을 복제할때는 반드시 전개연산자로 수행한다

    const change = [...squares]; // 복제
    change[sq_index] = flag ? "O" : "X";
    setFlag(!flag);
    setSquares(change);
  };

  // RenderSquare를 컴포넌트로 사용하는 방법
  return (
    <div>
      <div className="info">다음 플레이어 : O</div>
      <RenderSquare squares={squares} onSqClick={onSqClick} />
    </div>
  );
}

export default Board;
