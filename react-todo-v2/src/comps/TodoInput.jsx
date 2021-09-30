import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

const TodoInput = () => {
  const { todo, onChange, onKeyPress, onClick } = useTodoContext();
  return (
    <div className="input_box">
      <input value={todo.t_text} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoInput;
