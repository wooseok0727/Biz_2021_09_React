import React, { createContext, useContext, useRef, useState } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_complete: false,
  });

  const [todoList, setTodoList] = useState([]);

  const nextId = useRef(1);
  const inputId = useRef(null);

  const propsData = { todo, todoList, inputId };

  return (
    <TodoContext.Provider value={propsData}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
