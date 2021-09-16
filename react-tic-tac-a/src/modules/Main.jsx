// const RenderSquare = (props) => {
// const { squares } = props;
const RenderSquare = ({ squares, onSqClick }) => {
  // const squares = props.squares;
  const arrayBox = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  let count = 0;
  const buttons = arrayBox.map((subBox) => {
    const buttonCols = subBox.map((item) => {
      // 한라인의 button 만들기
      return (
        <button className="square" data-id={count} onClick={onSqClick}>
          {squares[count++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div className="box_row">{buttonCols}</div>;
  });
  return buttons;
};

export { RenderSquare };
