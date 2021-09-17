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

/**
 * 0,1,2
 * 3,4,5
 * 6,7,8
 */

const winnerLine = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// prettier-ignore
const calcWinnerFor = (sq) => {

  for(let i = 0, l = winnerLine.length ; i < l; i++ ) {
    const [a, b, c] = winnerLine[i];
    if(sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
  }
 return null;
};

const calcWinner = (sq) => {
  // const 결과 = 원본.map()
  // 결과의 배열개수와 원붠의 배열 개수는 항상 같다
  // 내용은 map의 return 결과에 따라서 달라진다

  // const 결과 = 원본.filter()
  // 결과의 배열개수 <= 원본보다 작거나 같다
  // filter()의 return 이 true 일때만 결과에 배열을 추가한다

  // 코드에서 비교결과가 true이면 return true 한것과 같고
  // 그때 win 의 값이 result 에 담기게 된다
  const result = winnerLine.filter((win) => {
    const [a, b, c] = win;
    return sq[a] && sq[a] === sq[b] && sq[a] === sq[c];
  });
  return result.length && sq[result[0][0]];
};

export { RenderSquare, calcWinnerFor };
