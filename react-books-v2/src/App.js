import { useState } from "react";
import "./App.css";
import BookMain from "./comps/BookMain";
import BookContext from "./context/BookContext";

function App() {
  // 한개의 데이터를 저장할 state
  const [book, setBook] = useState({
    b_id: 0,
    b_name: "threejs",
    b_genre: "3D WebGL",
  });
  const [bookList, setBookList] = useState([]);
  const providerData = { book, setBook, bookList, setBookList };

  return (
    <div className="App">
      <header className="App-header">
        <BookContext.Provider value={providerData}>
          <BookMain />
        </BookContext.Provider>
      </header>
    </div>
  );
}

export default App;
