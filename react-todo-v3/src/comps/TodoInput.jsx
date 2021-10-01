import React from "react";
import { useTodoContext } from "../context/AppContextProvider02";
import "../css/TodoInput.css";

const TodoInput = () => {
  const { inputId, todo, onChange, onClick, onKeyPress } = useTodoContext();
  return (
    <div className="input_box">
      <input
        ref={inputId}
        value={todo.t_text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoInput;
