import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

export const useTodoContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_isComplete: false,
  });

  const [todoList, setTodoList] = useState([]);

  const NextId = useRef(1);
  const onChange = (e) => {
    setTodo({
      t_id: NextId.current,
      t_text: e.target.value,
      t_isComplete: false,
    });
  };

  const onClick = () => {
    if (!todo.t_text) return alert("내용을 입력하세요");
    setTodoList([...todoList, todo]);
    setTodo({ ...todo, t_text: "" });
    NextId.current++;
  };

  const ProviderData = { todo, todoList, onChange, onClick };

  return (
    <AppContext.Provider value={ProviderData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
