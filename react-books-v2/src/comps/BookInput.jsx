import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookView from "./BookView";

const BookInput = () => {
  const { book, setBook, bookList, setBookList } = useContext(BookContext);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const bookInsert = () => {
    // Math.random() : 0 ~ 1 미만의 실수형 난수를 생한다
    setBook({ ...book, b_id: Math.random() });
    setBookList([...bookList, book]);
  };

  return (
    <div>
      <input
        name="b_name"
        placeholder="도서명 입력"
        value={book.b_name}
        onChange={onChangeHandler}
      />
      <input
        name="b_genre"
        placeholder="장르 입력"
        value={book.b_genre}
        onChange={onChangeHandler}
      />
      <button onClick={bookInsert}>리스트추가</button>
      <BookView />
    </div>
  );
};

export default BookInput;
