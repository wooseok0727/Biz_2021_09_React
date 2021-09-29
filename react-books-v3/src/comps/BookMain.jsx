import React, { useState } from "react";
import BookInput from "./BookInput";
import { Route } from "react-router-dom";
import BookContext from "../context/BookContext";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트르 보이거나 보이지 않도록 하는 방법
 * NavLink를 클릭 했을 떄 선택적으로 화면을 보여주기
 */
const BookMain = () => {
  const [book, setBook] = useState({
    b_name: "REACT",
    b_genre: "FRONTEND",
  });

  const providerData = { book, setBook };
  return (
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          HOME, 그 페이지는 가장 먼저 보여지는 페이지
        </Route>
        <Route path="/insert" exact component={BookInput} />
        <Route path="/list" exact>
          List VIEW
        </Route>
      </BookContext.Provider>
    </>
  );
};

export default BookMain;
