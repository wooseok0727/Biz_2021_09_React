import "../css/BookList.css";
import BookItem from "./BookItem";

// 객체배열을 선언하여 List의 제목 배열 만들기
const list_title_names = [
  { id: 0, t_name: "ID" },
  { id: 1, t_name: "도서명" },
  { id: 2, t_name: "장르" },
];

// 제목 배열을 사용하여 table의 title 생성하기
const list_title_view = list_title_names.map((title) => {
  return <th key={title.id}>{title.t_name}</th>;
});

const BookList = () => {
  return (
    <table className="list_box">
      <thead>
        <tr>{list_title_view}</tr>
      </thead>
      <tbody>
        <BookItem />
      </tbody>
    </table>
  );
};

export default BookList;
