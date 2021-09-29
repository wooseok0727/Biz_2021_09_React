import "../css/BookView.css";
import BookContext from "../context/BookContext";
import { useContext } from "react";

const BookView = () => {
  const { book } = useContext(BookContext);
  return (
    <div className="view_box">
      <span>도서명 : {book.b_name}</span>
      <span>장르 : {book.b_genre}</span>
    </div>
  );
};

export default BookView;
