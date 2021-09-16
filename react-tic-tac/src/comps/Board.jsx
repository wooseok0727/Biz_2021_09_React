import React from "react";

function Board() {
  const items = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const onSqClick = (e) => {
    const sq_index = e.target.dataset.id;
    alert(sq_index);
  };

  let count = 0;
  const boardArray = items.map((div) => {
    const btn = div.map((btn) => {
      return (
        <button className="square" data-id={count++} onClick={onSqClick}>
          {count - 1}
        </button>
      );
    });
    return <div className="board_row">{btn}</div>;
  });

  return (
    <div className="main_section">
      <div className="info">다음 플레이어 : O</div>
      {boardArray}
    </div>
  );
}

export default Board;
