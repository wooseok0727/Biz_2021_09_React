import React, { useState } from "react";
import { RenderSquare } from "../modules/RenderSquare";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [flag, setFlag] = useState(true);

  const onSqClick = (e) => {
    const sq_index = e.target.dataset.id;
    if (squares[sq_index]) return;

    const change = [...squares];
    change[sq_index] = flag ? "O" : "X";
    setFlag(!flag);
    setSquares(change);
  };

  return (
    <div className="main_section">
      <div className="info">다음 플레이어 : O</div>
      <RenderSquare squares={squares} onSqClick={onSqClick} />
    </div>
  );
}

export default Board;
