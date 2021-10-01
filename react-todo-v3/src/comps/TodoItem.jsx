import React from "react";
import "../css/TodoItem.css";

const TodoItem = ({ todo, onRemove, onCompClick }) => {
  const { t_id, t_text, t_complete } = todo;
  return (
    <div className="todo_item">
      <div className="todo_delete" onClick={() => onRemove(t_id)}>
        &times;
      </div>
      <div
        className={`todo_text ${t_complete && "checked"}`}
        onClick={() => onCompClick(t_id)}
      >
        {t_text}
        {t_id}
      </div>
      {t_complete && <div className="check_mark">&#x2713;</div>}
    </div>
  );
};

export default TodoItem;
