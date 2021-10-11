import { useTodoContext } from "../context/TodoContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList, onRemove, onCompClick } = useTodoContext();

  const viewList = todoList.map((item) => {
    return (
      <TodoItem
        todo={item}
        key={item.t_id}
        onRemove={onRemove}
        onCompClick={onCompClick}
      />
    );
  });

  return (
    <>
      <svg viewBox="0 0 0 0" className="item_temp">
        <defs>
          <path id="todo_line" stroke="#000" d="M21 12.3h1750v0.1z"></path>
          <path
            id="todo_box"
            stroke="#000"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          ></path>
          <path id="todo_check" stroke="#000" d="M10 13l2 2 5-5"></path>
          <circle id="todo_circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
      </svg>
      <div className="view_list">{viewList}</div>
    </>
  );
};

export default TodoList;
