import "../../css/TodoItem.css";

const TodoItem = ({ todo, onCompClick, onRemoveClick }) => {
  const { t_id, t_text } = todo;
  return (
    <div className="todo_box">
      <label className="todo">
        <input
          className="todo_state"
          type="checkbox"
          onClick={() => onCompClick(t_id)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1750px"
          height="24px"
          viewBox="0 0 1750 24"
          className="todo_icon"
        >
          <use xlinkHref="#todo_line" className="todo_line"></use>
          <use xlinkHref="#todo_box" className="todo_box"></use>
          <use xlinkHref="#todo_check" className="todo_check"></use>
          <use xlinkHref="#todo_circle" className="todo_circle"></use>
        </svg>

        <div className="todo_text">{t_text}</div>
      </label>
      <div className="todo_remove" onClick={() => onRemoveClick(t_id)}>
        &times;
      </div>
    </div>
  );
};

export default TodoItem;
