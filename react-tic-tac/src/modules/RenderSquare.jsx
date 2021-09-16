function RenderSquare({ squares, onSqClick }) {
  const items = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  let count = 0;
  const boardArray = items.map((div) => {
    const btn = div.map((btn) => {
      return (
        <button className="square" data-id={count} onClick={onSqClick}>
          {squares[count++]}
        </button>
      );
    });
    return <div className="board_row">{btn}</div>;
  });

  return boardArray;
}

export { RenderSquare };
