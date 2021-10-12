import { useCallback, useState } from "react";
import { useTodoContext } from "../../context";
import "../../css/TodoInput.css";
import { Button, Modal } from "../index";

const TodoInput = () => {
  const { inputId, todo, onChange, todoInsert } = useTodoContext();
  const [modal, setModal] = useState(false);

  const onConfirm = () => {
    setModal(false);
  };

  const onSubmit = useCallback(
    (e) => {
      setModal(todoInsert());
      e.preventDefault();
    },
    [todoInsert]
  );
  return (
    <>
      <form className="input_box" onSubmit={onSubmit}>
        <input
          ref={inputId}
          value={todo.t_text}
          onChange={onChange}
          className={todo.t_text && "focus"}
        />
        <span className="label">ADD TODO HERE..</span>
        <svg width="120px" height="26px" viewBox="0 0 120 26">
          <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25"></path>
        </svg>
        <span className="border"></span>
        <Button>+</Button>
      </form>
      {modal && <Modal title="OOPS! WRITE A TODO." onConfirm={onConfirm} />}
    </>
  );
};

export default TodoInput;
