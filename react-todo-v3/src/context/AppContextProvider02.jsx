import React, { createContext, useContext, useRef, useState } from "react";

/**
 * React Context API 기능을 활용하여
 * state를 관리하는 도구
 *
 * 다중 구조의 컴포넌트가 겹쳐있는 경우
 * state를 전파하는 것이 매우 불편한 코드로 작성될 수 있다
 *
 * 이럴 때 Context API 를 활용하여
 * state와 공용으로 사용할 여러가지 함수를 Store에 보관하고
 * 필요한 곳에서만 useContext()를 사용하여 쉽게 getter할 수 있도록
 * 도와주는 컴포넌트
 *
 * Context를 생성하기
 * 생성된 Context에 state 등을 보관하고
 * useContext() Hook을 커스터마이징하여 손쉽게 사용할 수 있도록 하기
 *
 * Context를 사용할 컴포넌트들을 합성 패턴을 이용하여 관리할 수 있도록 한다
 */

// 컨텍스트 생성
const AppContext = createContext();

// 컨텍스트의 Store에 보관된 정보를 추출하기 위한 Hook 함수를 선언
export const useTodoContext = () => useContext(AppContext);

// Provider를 합성패턴으로 선언하여
// 필요한 곳에서 끌어올려 사용할 수 있도록 한다
const AppContextProvider02 = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_complete: false,
  });

  const [todoList, setTodoList] = useState([]);

  const nextId = useRef(1);
  const inputId = useRef(null);

  const onChange = (e) => {
    const t_text = e.target.value;
    // ES6 이후에는 객체에 값을 담을 때
    // 객체의 키이름과 같은 변수에 담긴 값을 담을 때는
    // 키 이름 한번만 사용해도 된다
    // { t_text : t_text } 는 { t_text}처럼 사용해도 된다
    setTodo({ ...todo, t_text, t_id: nextId.current });
  };

  // 리스트에 추가하기
  const todoInsert = () => {
    if (!todo.t_text) {
      alert("할 일을 입력하세요");
      inputId.current.focus();
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo({ ...todo, t_text: "" });
    nextId.current++;
  };

  // 입력된 todo를 todoList에 추가하기
  const onClick = () => todoInsert();

  // 입력박스에서 Enter 키가 눌러지면
  const onKeyPress = (e) => {
    // e.keyCode === 13
    console.log(e.key);
    if (e.key === "Enter") {
      todoInsert();
    }
  };

  const onRemove = (t_id) => {
    if (window.confirm("삭제할까요?")) {
      setTodoList(todoList.filter((todo) => todo.t_id !== t_id));
    }
  };

  const onCompClick = (t_id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.t_id === t_id ? { ...todo, t_complete: !todo.t_complete } : todo
      )
    );
  };

  const propsStore = {
    todo,
    todoList,
    inputId,
    onChange,
    onClick,
    onKeyPress,
    onRemove,
    onCompClick,
  };

  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider02;
