import React, { useContext } from "react";
import BookContext from "../context/BookContext";

const BookInput = () => {
  const { book, setBook } = useContext(BookContext);
  const onChangeHandle = (e) => {
    setBook(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="도서명을 입력"
        value={book}
        onChange={onChangeHandle}
      />
    </div>
  );
};

export default BookInput;
