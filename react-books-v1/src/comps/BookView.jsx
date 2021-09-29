import React, { useContext } from "react";
import BookContext from "../context/BookContext";

const BookView = () => {
  const { book } = useContext(BookContext);
  return <div>입력된 도서명 : {book}</div>;
};

export default BookView;
