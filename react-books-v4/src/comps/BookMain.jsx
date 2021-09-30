import BookInput from "./BookInput";
import { Route } from "react-router-dom";
import BookList from "./BookList";
import AppContextProvider from "../context/AppContextProvider";

const BookMain = () => {
  return (
    <>
      <AppContextProvider>
        <Route path="/" exact>
          HOME, 그 페이지는 가장 먼저 보여지는 페이지
        </Route>
        <Route path="/insert" exact>
          <BookInput />
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
      </AppContextProvider>
    </>
  );
};

export default BookMain;
