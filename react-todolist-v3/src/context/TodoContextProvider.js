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

  const onChange = (e) => {
    const t_text = e.target.value;
    setTodo({ ...todo, t_text, t_id: nextId.current });
  };

  const todoInsert = () => {
    if (!todo.t_text) {
      return true;
    }
    setTodoList([...todoList, todo]);
    setTodo({ ...todo, t_text: "" });
    nextId.current++;
  };

  const onRemove = (t_id) => {
    setTodoList(todoList.filter((todo) => todo.t_id !== t_id));
  };

  const onCompClick = (t_id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.t_id === t_id ? { ...todo, t_complete: !todo.t_complete } : todo
      )
    );
  };

  const propsData = {
    todo,
    todoList,
    inputId,
    onChange,
    todoInsert,
    onRemove,
    onCompClick,
  };

  return (
    <TodoContext.Provider value={propsData}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
