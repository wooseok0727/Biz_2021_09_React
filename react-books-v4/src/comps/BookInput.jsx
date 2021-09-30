import "../css/BookInput.css";
import BookView from "./BookView";
import MyButton from "../My/MyButton";
import { useBookContext } from "../context/AppContextProvider";
import UUID from "react-uuid";

const BookInput = () => {
  const { book, setBook, bookList, setBookList } = useBookContext();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // 입력된 도서정보를 배열에 추가하기
  // 입력된 도서정보에 UUID 키값을 추가하고
  // 도서정보를 배열에 저장하는데
  // 타이밍에 따라 아직 UUID가 미쳐 추가 되지 않은 상태에서
  // 리스트에 추가되는 것을 방지하기 위하여 Promise 방식으로
  // 함수를 실행한다
  const bookInsert = async () => {
    await setBook({ ...book, b_id: UUID() });
    await setBookList([...bookList, book]);
  };

  return (
    <>
      <div className="input_box">
        <div>
          <label>도서명</label>
          <input name="b_name" value={book.b_name} onChange={onChangeHandler} />
        </div>
        <div>
          <label>장르</label>
          <input
            name="b_genre"
            value={book.b_genre}
            onChange={onChangeHandler}
          />
        </div>
        <MyButton onClick={bookInsert}>리스트 추가</MyButton>
      </div>
      <BookView />
    </>
  );
};

export default BookInput;
