import "../css/BookView.css";
import { useBookContext } from "../context/AppContextProvider";

const BookView = () => {
  const { book } = useBookContext();
  return (
    <div className="view_box">
      <span>도서명 : {book.b_name}</span>
      <span>장르 : {book.b_genre}</span>
    </div>
  );
};

export default BookView;
