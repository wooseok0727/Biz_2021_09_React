import React, { useCallback } from "react";
import { useTodoContext } from "../context/TodoContextProvider";
import "../css/TodoInput.css";
import Button from "./Button";

const TodoInput = () => {
  const { inputId, todo, onChange, todoInsert } = useTodoContext();

  const onSubmit = useCallback(
    (e) => {
      todoInsert();
      e.preventDefault();
    },
    [todoInsert]
  );
  return (
    <form className="input_box" onSubmit={onSubmit}>
      <input ref={inputId} value={todo.t_text} onChange={onChange} />
      <span className="label">ADD TODO HERE..</span>
      <svg width="120px" height="26px" viewBox="0 0 120 26">
        <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25"></path>
      </svg>
      <span className="border"></span>
      <Button>+</Button>
    </form>
  );
};

export default TodoInput;
