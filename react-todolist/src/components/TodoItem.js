import React from "react";

const TodoItem = ({ todo, onRemove, onCompClick }) => {
  const { t_id, t_text, t_complete } = todo;
  return (
    <div className="todo_item">
      <div className="todo_delete">&times;</div>
      <div className={`todo_text ${t_complete && "checked"}`}>
        {t_text}
        {t_id}
      </div>
      {t_complete && <div className="check_mark">&#x2713;</div>}
    </div>
  );
};

export default TodoItem;
